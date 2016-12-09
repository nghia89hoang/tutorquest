import React, {Component} from 'react'
import {Well} from 'react-bootstrap'
import Level from '../data/level'
import CourseItem from './CourseItem'
import SimpleCourseItem from './SimpleCourseItem'
import teacher from '../data/teacher'
class CourseList extends Component {
  constructor(props) {
    super(props)
  }  
  render() {
    const {listCourse} = this.props
    let courseItems = (<div> No course to show </div>)
    if(listCourse && listCourse.length > 0) {
      courseItems = listCourse.map((course, idx) => {
        if(this.props.simpleList && this.props.simpleList == true) {
          return (<SimpleCourseItem course={course} key={course._id} {...this.props} />)
        } else {
          return (<CourseItem course={course} key={course._id} {...this.props}/>)
        }
      })
    }
    return (
      <div>
        {courseItems}
      </div>)
  }
}

export default CourseList