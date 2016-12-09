import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} from 'graphql';
import {Types} from 'mongoose'

import CourseType from '../../types/course'
import CourseModel from '../../../models/course'

export const listCourses = {
  type: new GraphQLList(CourseType),
  args: {
    page: {
      name: 'page',
      type: GraphQLInt
    }
  },
  resolve (root, params, options) {
    const courses = CourseModel.find({status: 'valid'}).skip(params.page).limit(15).sort({date: -1}).exec()
    return courses  
  }
}
