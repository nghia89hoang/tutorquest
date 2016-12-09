require('songbird')
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} from 'graphql'
import {Types} from 'mongoose'

import ProfileDetailType from '../../types/profileDetail'
import UserModel from '../../../models/user'
import CourseModel from '../../../models/course'

export const getProfileDetail = {
  type: ProfileDetailType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: async function (root, params, options) {
    const user = await UserModel.findById(params._id).promise.exec()      
    const ownedCourses = await CourseModel.find({teacher: user._id}).promise.exec()
    const enrolledCourses = await CourseModel.find({assignments: {$elemMatch: {student: user._id}}}).promise.exec()
    console.log('Enrolled courses: ', enrolledCourses)
    return {
      user,
      ownedCourses,
      enrolledCourses
    }
  }
}
