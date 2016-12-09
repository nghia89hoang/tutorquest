import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} from 'graphql'

export default new GraphQLObjectType({
  name: 'LocalUser',
  fields: {
    email: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    }
  }
})