import '../css/CommonItem.css'
import React, {Component} from 'react'
import {Link} from 'react-router'
import _ from 'lodash'

import TeacherBio from './TeacherBio'
import RatingItem from './RatingItem'
import CourseList from './CourseList'
import { Row, Col, Label, Tabs, Tab } from 'react-bootstrap'
import {getProfileDetail} from '../query'
let relatedCourses = []
class ProfileView extends Component {  
  constructor(props) {
    super(props)    
    this.fetchData = this.fetchData.bind(this)
    this.state = {
      userId: this.props.params.id,      
      teacher: {},
      ownedCourses: []
    }
  } 
  fetchData(userId) {
    const options = {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(getProfileDetail(userId))
    }    
    fetch(`/graphql`, options).then((res) => res.json()).then((data) => {
      this.setState({
        userId: userId,
        teacher: data.data.getProfileDetail.user,
        ownedCourses: data.data.getProfileDetail.ownedCourses,
        enrolledCourses: data.data.getProfileDetail.enrolledCourses
      })            
    })
  }
  componentWillReceiveProps(nextProps) {    
    if(this.props.params != nextProps.params && nextProps.params.id) {   
      this.fetchData(nextProps.params.id) 
    }
  }
  componentDidMount() {
    console.log('ProfileView Didmount')    
    this.fetchData(this.props.params.id)    
  }
  render() {        
    return (
      <div className='body'>
        <Row>
          <Col md={4}>
            <TeacherBio teacher={this.state.teacher} />
          </Col>
          <Col md={8}>
            <ul className='nav nav-tabs' role='tablist'>   
              <li className='nav-item active' data-toggle='tab' role='tab'> Owned courses </li>           
              <li className='nav-item' data-toggle='tab' role='tab'> Enrolled courses </li>           
            </ul>                                  
          </Col>          
        </Row>
        <Row>
          <Col md={12}>
            <div className='tab-content'>
             <div className='tab-pane active' classID='owned' role='tabpanel'>                              
                <CourseList listCourse={this.state.ownedCourses} simpleList={true} {...this.props}/>                              
              </div>
              <div className='tab-pane' classID='enrolled' role='tabpanel'>                                
                <CourseList simpleList={false} listCourse={this.state.enrolledCourses} {...this.props}/>                  
              </div>
            </div>         
          </Col>          
        </Row>
      </div>
    )
  }
}

export default ProfileView