import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import Login from './components/Login'
import Index from './components/Index'
import CourseDetail from './components/CourseDetail'
import NewCourse from './components/NewCourse'
import ProfileView from './components/ProfileView'

import './css/index.css'
import store,{history} from './store'
import { Router, 
  Route,
  IndexRoute,
  browserHistory } from 'react-router'

ReactDOM.render(
  <Provider store={store}>  
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Index} />
        <Route path='/login' component={Login}/>
        <Route path='/courses/:courseId' component={CourseDetail} />
        <Route path='/profile/:id' component={ProfileView}></Route>
      </Route>    
    </Router>
  </Provider>,
  document.getElementById('root') 
);
        // <Route path='newCourse' component={NewCourse} />