function user(state = {}, action) {
  switch(action.type) {
    case 'SOCIAL_LOGIN':
      console.log('Reducing for ', action.type)
      return {        
        ...action.profile
      }
    case 'SOCIAL_LOGOUT':
      return {
        
      }
    default:
      return state
  }
}
export default user