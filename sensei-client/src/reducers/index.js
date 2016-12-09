import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import courses from './courses'
import user from './user'
import teachers from './teachers'

const rootReducer = combineReducers({
  courses,
  user,
  teachers,
  routing: routerReducer
})
export default rootReducer
