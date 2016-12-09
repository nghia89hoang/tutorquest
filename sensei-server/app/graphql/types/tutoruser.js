import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLID
} from 'graphql'
export default new GraphQLObjectType({
  name: 'TutorUser',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    display_name: {
      type: GraphQLString
    },
    contact_email: {
      type: GraphQLString
    },
    dob: {
      type: GraphQLString
    },
    gender:{
      type: GraphQLString
    },
    education: {
      type: GraphQLString
    },
    more_info: {
      type: GraphQLString
    },
    street_address: {
      type: GraphQLString
    },
    city: {
      type: GraphQLString
    },
    subjects: {
      type: new GraphQLList(GraphQLString)
    }
  }
})