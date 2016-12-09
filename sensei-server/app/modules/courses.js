require('songbird')
const express = require('express')
const mongoose = require('mongoose')
const Course = require('../models/course')
const User = require('../models/user')

module.exports = function(appState) {
  const router = express.Router({mergeParams: true})
  const fakeDB = appState.fakeDB
  async function getCourse(req, res) {
    console.log('Getting course')
    const embed = req.query.embed
    const courseId = req.params.id
    console.log('Request for course id: ' + courseId + ' query.embed: ' + embed)
    const course = await Course.promise.findOne({_id: courseId})
    const teacher = await User.promise.findOne({_id: course.teacher})
    console.log(`Teacher ${course.teacher}:`, course)
    res.json({
      course,
      teacher
    })
  }
  async function getCourses(req, res) {
    const user = req.user
    console.log('User logined: ', user)
    console.log('Request courses with query: ', req.query)
    //TODO for paging    
    const courses = await Course.find({}).skip(0).limit(15).sort({date: -1}).promise.exec()
    const teacherId = courses.map((course) => course.teacher)
    const teachers = await User.promise.find({_id: {$in: teacherId}})
    // console.log('Teacher got: ', teachers)
    // console.log('Courses from DB', courses)
    res.json( {
      courses: [...courses, ...fakeDB.courses],
      teachers: [...fakeDB.teachers, ...teachers]
    })
    // res.json({courses: []})
  }
  async function createNewCourse(req, res) {
    const course = req.body
    console.log('New course submitted:', course) 
    let newCourse = new Course()
    newCourse.updateCourse(course)
    await newCourse.promise.save()
    res.json({
      status: 'success'
    })
  }
  async function assignCourse(req, res) {
    const assignment = req.body
    const courseId = req.params.id
    const course = await Course.findById(courseId).promise.exec()    
    const assign = course.assignments.find( (s) => (s.student == assignment.student) )
    console.log('Assign: ', assign)
    if ( assign == undefined ) {
      course.assignments.push(assignment)
      await course.promise.save()
      res.json({
        status: 'success' 
      })
    } else {
      res.json({
        status: 'failed: already  assigned' 
      })
    }
  }
  router.get('/', getCourses)
  router.post('/', createNewCourse)
  router.get('/:id', getCourse)
  router.put('/:id/assign', assignCourse)
  return {
    routes: router,
    middlewares: {}
  }
}