require('songbird')
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList
} from 'graphql'
import LearnSessionType from './learnSession'
import AssignmentType from './assignment'
import ReviewType from './review'
import UserType from './user'
import UserModel from '../../models/user'

export default new GraphQLObjectType({
  name: 'Course',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    status: {
      type: GraphQLString
    },
    date: {
      type: GraphQLString
    },
    recourse_times: {
      type: GraphQLInt
    },
    assignments: {
      type: new GraphQLList(AssignmentType),
       resolve: async function(root, args) {
        return await root.assignments.map( async (a) => {          
          const user = await UserModel.findById(a.student).promise.exec()
          return {
            student: user,
            message: a.message,
            status: a.status
          }
        })        
      }
    },
    subject: {
      type: GraphQLString
    },
    level: {
      type: GraphQLString
    },
    teacher: {
      type: UserType,
      resolve: function(root, args) {
        const teacher = UserModel.findById(root.teacher).exec()        
        return teacher
      }
    },
    about: {
      type: GraphQLString
    },
    city: {
      type: GraphQLString
    },
    prefer_duration: {
      type: GraphQLString
    },
    session_in_week: {
      type: new GraphQLList(LearnSessionType)
    },
    prefer_location: {
      type: GraphQLString
    },
    price_per_month: {
      type: GraphQLString
    },
    rating: {
      type: new GraphQLList(ReviewType),
      resolve: async function(root, args) {
        return await root.rating.map( async (r) => {          
          const user = await UserModel.findById(r.author).promise.exec()
          return {
            author: user,
            comment: r.comment,
            stars: r.stars
          }
        })        
      }
    }
  }
})