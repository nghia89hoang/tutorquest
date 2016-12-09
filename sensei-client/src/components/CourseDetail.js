import '../css/CommonItem.css'
import React, {Component} from 'react'
import _ from 'lodash'
import TeacherBio from './TeacherBio'
import CourseInfo from './CourseInfo'
import RatingItem from './RatingItem'
import AssignedItem from './AssignedItem'
import { Row, Col } from 'react-bootstrap'
import {getCourseDetail} from '../query'
class CourseDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      course: {},
      teacher: {}
    }
  }
  componentDidMount() {
    const {courseId} = this.props.params   
    const options = {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(getCourseDetail(courseId))
    }
    fetch(`/graphql`, options).then((res) => res.json()).then((data) => {        
      this.setState({
        course: data.data.getCourseById
      })
    })    
  }
  render() {    
    const course = this.state.course
    const teacher = course.teacher    
    console.log('Teacher', teacher, 'Course', course)
    if( _.isEmpty(course) || _.isEmpty(teacher) ) {
      return (<div>Loading...</div>)
    } else {
      const Ratings = course.rating.map( (r) => (
            <Col md='12'>
              <RatingItem key={r.author._id} rating={r} />
            </Col>
          ))
      const Assigns = course.assignments.map((a) => (        
          <Col md={12}>
            <AssignedItem key={a.student._id} assignment={a} />
          </Col>                
      ))
      return (
        <div className='body container-fluid'>
          <Row>
            <Col md={4}>
              <TeacherBio teacher={teacher}/>            
            </Col>
            <Col md={8}>
              <CourseInfo course={course} {...this.props}/>
            </Col>
          </Row>   
          <Row>
            <Col md={12}>
              <div className='panel panel-primary'>
                <div className='panel-heading'>
                  <h4 className='panel-title'>
                    Assignments to this course: 
                  </h4>
                </div>
                <div className='panel-body'>
                  {Assigns}  
                </div>
              </div>
            </Col>                             
          </Row>    
          <Row>
            <Col md={12}>
              <div className='panel panel-primary'>
                <div className='panel-heading'>
                  <h4 className='panel-title'>
                    Reviews: 
                  </h4>                                  
                </div>
                <div className='panel-body'>
                  {Ratings}
                </div>
              </div>
            </Col>            
          </Row>          
        </div>
      )
    }
  }
}

export default CourseDetail