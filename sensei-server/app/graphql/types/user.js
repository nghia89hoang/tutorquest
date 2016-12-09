import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} from 'graphql'
import LocalUser from './LocalUser'
import TutorlUser from './tutoruser'
import FacebookUser from './FacebookUser'

export default new GraphQLObjectType({
  name: 'User',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    local: {
      type: LocalUser
    },
    facebook: {
      type: FacebookUser
    },
    tutor: {
      type: TutorlUser
    }
  }
})