import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql'
import UserType from './user'

export default new GraphQLObjectType({
  name: 'Assignment',
  fields: {
    student: {
      type: UserType     
    },
    message: {type: GraphQLString},
    status: {type: GraphQLString}
  }
})