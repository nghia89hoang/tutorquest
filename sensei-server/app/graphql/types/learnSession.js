import {
  GraphQLString,
  GraphQLObjectType
} from 'graphql'

export default new GraphQLObjectType({
  name: 'LearnSession',
  fields: {
    day: {type: GraphQLString},
    start: {type: GraphQLString},
    end: {type: GraphQLString}
  }
})