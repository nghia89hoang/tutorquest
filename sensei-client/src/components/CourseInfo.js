import '../css/CommonItem.css'
import React, {Component} from 'react'
import _ from 'lodash'
import TeacherBio from './TeacherBio'
import ButtonAssignCourse from './ButtonAssignCourse'

import { Row, Col, Label } from 'react-bootstrap'
import Level from '../data/level'
import City from '../data/city'
class CourseInfo extends Component {
  constructor(props) {
    super(props)
  }  
  render() {    
    const {course} = this.props
    const {user} = this.props
    console.log('CourseInfo: ', course);
    let schedule
    if( !course.session_in_week || course.session_in_week.length == 0) {
      schedule = 'Negotiable'
    } else {
      schedule = course.session_in_week.map((session, i) => 
                      { return (session.day + ':' + session.start + '-' + session.end + ' .')})       
    }        
    if( _.isEmpty(course) ) {
      return (<div>Loading...</div>)
    } else {
      return (
        <div className='container-fluid panel panel-primary'>
          <Row>
            <Col md={8}>            
              <h2>
                <span className='label label-primary'>
                  {course.subject} - {Level[course.level]}
                </span>
              </h2>
            </Col>
            <Col md={4} pullRight>
              <h3 className='text-right'>
                <span className='label label-info'>
                  $ {course.price_per_month} / month
                </span>
              </h3>
            </Col>
          </Row>
          <Row>
            <Col mdOffset={10} md={2}>
              <ButtonAssignCourse course={course} {...this.props} />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h4> City: {City[course.city]} </h4>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h4>Prefer location: {course.prefer_location}</h4>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h4>Prefer schedule: {schedule}</h4>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h4>
                About this course: {course.about}
              </h4>            
            </Col>            
          </Row>               
        </div>
      )
    }
  }
}

export default CourseInfo