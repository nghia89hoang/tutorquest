function teachers(state = [], action) {
  switch(action.type) {
    case 'LIST_TEACHERS':
      console.log('Listing teachers: ', action.teachers)
      return [        
        ...action.teachers
      ]
    default:
      return state
  }
}

export default teachers