import React, {Component} from 'react'
import {Grid, Col, Row, PageHeader} from 'react-bootstrap'
import SearchBox from './SearchBox'
import CourseList from './CourseList'
// import fetch from 'node-fetch'
import config from '../config'
import _ from 'lodash'
import  Spinner from 'react-spinkit'
import {listCourseItems} from '../query'
class Index extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {    
    if(this.props.courses.length == 0) {      
      const options = {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(listCourseItems)
      }
      // fetch(`/api/courses?embed=true`).then( (res) => {
      fetch(`/graphql`, options).then( (res) => {
        return res.json()
      }).then((data) => {
        // this.props.listTeachers(data.teachers)
        console.log(data)
        this.props.listCourses(data.data.listCourses)
      })
    }
  }
  render() {
    const {courses} = this.props   
    let display
    if( _.isEmpty(courses)) {
      display = <Spinner spinnerName="three-bounce" />
    } else {
      display = <CourseList listCourse={courses} {...this.props}/>
    }
    return (
      <div className='body'>      
        <SearchBox />
        <Grid>
          <Row>
            <Col md={8}>
              {display}
            </Col>
          </Row>        
        </Grid> 
      </div>
    )
  }
}

export default Index