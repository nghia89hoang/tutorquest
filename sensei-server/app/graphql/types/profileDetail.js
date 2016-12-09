import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLID
} from 'graphql'

import UserType from './user'
import CourseType from './course'
import CourseModel from '../../models/course'
export default new GraphQLObjectType({
  name: 'ProfileDetail',
  fields: {
    user: {
      type: UserType
    },
    ownedCourses: {
      type: new GraphQLList(CourseType)
    },
    enrolledCourses: {
      type: new GraphQLList(CourseType)
    }
  }
})