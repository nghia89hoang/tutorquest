const mongoose = require('mongoose')


let courseSchema = mongoose.Schema({  
  status: {type: String, default: 'valid'},
  date: { type: Date, default: Date.now },  
  recourse_times: { type: Number, default: 0},
  assignments: [
    { 
      student: mongoose.Schema.Types.ObjectId,
      message: String,
      status:  {type: String, default: "pending"}
    }
  ],
  subject: {type: String, required: true},
  level: String,
  teacher: mongoose.Schema.Types.ObjectId,
  about: String,
  city: String,
  prefer_duration: String,
  session_in_week: [
    {
      day: String,
      start: String,
      end: String
    }
  ],
  // teaching location: student resident or 
  prefer_location: String,
  price_per_month: { type: Number, required: true},
  rating: [{
    author: mongoose.Schema.Types.ObjectId,    
    comment: String,
    stars: Number
  }]
})
courseSchema.methods.updateCourse = function (course) {  
  this.subject = course.subject
  this.city = course.level
  this.level = course.level
  this.price_per_month = course.price
  this.prefer_location = course.location
  this.about = course.about
  this.teacher = mongoose.Types.ObjectId(course.teacher)
  return this
}
module.exports = mongoose.model('Course', courseSchema)