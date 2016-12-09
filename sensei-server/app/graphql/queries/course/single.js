require('songbird')
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} from 'graphql'
import {Types} from 'mongoose'

import CourseType from '../../types/course'
import CourseModel from '../../../models/course'
import UserModel from '../../../models/user'

export const getCourseById = {
  type: CourseType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: async function (root, params, options) {
    const course = await CourseModel.findById(params._id).promise.exec()        
    return course
  }
}
