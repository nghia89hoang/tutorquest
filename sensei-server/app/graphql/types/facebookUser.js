import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} from 'graphql'

export default new GraphQLObjectType({
  name: 'FaceBookUser',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLString
    },
    avatar: {
      type: GraphQLString
    },
    token:{
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },    
  }
})