function courses(state = [], action) {
  switch(action.type) {
    case 'LIST_COURSES':
      console.log('Listing courses: ', action.courses)
      return [        
        ...action.courses
      ]
    case 'ADD_LIST_COURSES':
      console.log('Adding courses: ', action.courses)
      return [
        ...state,
        ...action.courses
      ]
    case 'REFRESH_COURSES':
    default:
      return state
  }
}

export default courses