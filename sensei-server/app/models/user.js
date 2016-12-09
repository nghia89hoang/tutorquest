require('songbird')
const mongoose = require('mongoose')
const crypto = require('crypto')

let userSchema = mongoose.Schema({
  local: {
    email: String,
    password: String
  },
  facebook: {
    id: String,
    avatar: String,
    token: String,
    email: String,
    name: String
  },
  // twitter: {
  //   id: String,
  //   token: String,
  //   secret: String,
  //   email: String,
  //   displayName: String,
  //   userName: String
  // },
  tutor: {
    display_name: String,  
    contact_email: String,    
    dob: String,
    gender: String,
    education: String,
    more_info: String,
    street_address: String,
    city: String,
    subjects: [String]    
  }
})
userSchema.methods.generateHash = async function(password) {
  let hash = await crypto.promise.pbkdf2(password, 'PEPPER', 4096, 512, 'sha256')
  return hash.toString('hex')
}

userSchema.methods.validatePassword = async function(password) {  
  let hash = await crypto.promise.pbkdf2(password, 'PEPPER', 4096, 512, 'sha256')  
  return hash.toString('hex') === this.local.password
}

userSchema.methods.facebookUpdateAccount = function (profile) {  
  this.facebook.id = profile.id
  this.facebook.email = profile.email
  this.facebook.token = profile.token
  this.facebook.name = profile.name
  this.facebook.avatar = profile.picture
  this.tutor.display_name = profile.name
  this.tutor.contact_email = profile.email
  this.tutor.gender = profile.gender
  this.tutor.dob = profile.birthday
  return this
}
userSchema.methods.twitterUpdateAccount = function ({profile, token, secretToken}) {
  this.twitter.id = profile.id
  this.twitter.email = profile.email
  this.twitter.token = token
  this.twitter.secret = secretToken
  this.twitter.displayName = profile.displayName
  this.twitter.userName = profile.username
  return this
}
userSchema.methods.updateAccount = function (profile) {
  // let updateMethod = `${profile.provider}UpdateAccount`
  // console.log(`${JSON.stringify(this)}`)
  return this[profile.provider + 'UpdateAccount'](profile)
}


module.exports = mongoose.model('User', userSchema)