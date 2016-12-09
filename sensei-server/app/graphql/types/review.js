require('songbird')
import {  
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} from 'graphql'
import UserType from './user'
import UserModel from '../../models/user'

export default new GraphQLObjectType({
  name: 'Review',
  fields: {
    author: {type: UserType},
    comment: {type: GraphQLString},
    stars: {type: GraphQLInt}
  }
})