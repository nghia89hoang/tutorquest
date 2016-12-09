require('songbird')
const express = require('express')
const User = require('../models/user')
const bodyParser = require('body-parser')

module.exports = function(appState) {
  const router = express.Router({mergeParams: true})
  const passport = appState.passport
  const facebookScope = {scope: ['email', 'public_profile', 'user_posts']} 
  async function handleUser(req, res) {
    const userId = req.params.id
    const user = await User.promise.findOne({_id: userId})
    res.json(user)
  }
  async function loginOrSignup(req, res) {    
    const socialProfile = req.body
    const sess = req.session
    let user
    // console.log('Session: ', sess)
    if (sess.userId == undefined) {
      // console.log('No session existed')
      user = await User.promise.findOne({'facebook.id': socialProfile.id})        
      if(!user) {
        user = new User()
        user.updateAccount(socialProfile)
        await user.promise.save()
      }
      sess.userId = user._id
      res.locals.userId = user._id
      // console.log('Session save: ', sess)
    } else {
      // console.log('Login using session')
      user = await user.promise.find({_id: sess.userId})
    }
    res.send(JSON.stringify(user))
  }
  router.get('/:id', handleUser)
  router.post('/loginOrSignup', loginOrSignup)
  // router.get('/a', (req, res) => {
  //   const sess = req.session
  //   console.log('GET a ', sess)
  //   if( sess && !sess.userId ){
  //     sess.userId = 1
  //   } else {
  //     sess.userId += 1
  //   } 
  //   console.log('View: ' + sess.userId);
  //   res.send('View: ' + sess.userId)   
  // })
  return {
    routes: router,
    middlewares: []
  }
}
  // router.get('/auth/facebook', passport.authenticate('facebook', facebookScope))
  // router.get('/auth/facebook/callback', passport.authenticate('facebook', {
  //   successRedirect: '/api/users/',
  //   failureRedirect: '/',
  //   failureFlash: true
  //   }), (err,req,res,next) => {
  //   if(err) {
  //     res.status(400);
  //     console.log('ERR_MSG: ' + err.message)
  //   }
  // })
  // router.get('/connect/facebook', passport.authorize('facebook', facebookScope))
  // router.get('/connect/facebook/callback', passport.authorize('facebook', {
  //   successRedirect: '/',
  //   failureRedirect: '/',
  //   failureFlash: true
  // }))