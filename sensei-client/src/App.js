import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from './actions/actionCreators'
import Main from './components/Main'

// import courses from './data/course'

function mapStateToProps(state) {
  return {
    user: state.user,
    courses: state.courses,
    teachers: state.teachers
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}
const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
