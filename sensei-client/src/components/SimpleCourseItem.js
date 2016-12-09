import '../css/CommonItem.css'
import React, {Component} from 'react'
import { Image, Glyphicon, Button,
    Col, Row,    
    Badge} from 'react-bootstrap'
import Level from '../data/level'
import {Link} from 'react-router'
import ButtonAssignCourse from './ButtonAssignCourse'

class SimpleCourseItem extends Component {
  constructor(props) {
    super(props)
    this.handleAssign = this.handleAssign.bind(this)
  }
  handleAssign(e) {
    console.log('Assign course: ', this.props.course._id);
  }
  render() {
    const {course} = this.props
    const numReview = course.rating.length || 0
    let schedule
    const ratingNum = course.rating.length
    let stars
    if(ratingNum && ratingNum > 0) {
      const avgStars = course.rating.reduce( (accum, curr) => {        
        return accum + parseInt(curr.stars)
      }, 0)      
      stars = []
      for(let i = 0; i < avgStars / ratingNum; i++) {
        stars.push(<Glyphicon key={i} glyph="star" />)
      } 
    }
    if( !course.session_in_week || course.session_in_week.length == 0) {
      schedule = (<div> Negotiable </div>)
    } else {
      schedule = course.session_in_week.map((session, i) => 
                      { return (session.day + ':' + session.start + '-' + session.end + ' .')})       
    }
    return (      
        <div className='panel panel-primary'>
          <Row className='CourseItemHeader'>
            <Col md={5}>
              <h2>                
                <Link className='InfoLink' to={`/courses/${course._id}`}>
                  <span className='label label-primary'>
                      {course.subject} - {Level[course.level]}
                  </span>                                  
                </Link>
              </h2>
            </Col>            
            <Col mdOffset={4} md={3}>
              <h3>
                <span className='label label-success'>
                  Price: ${course.price_per_month}/month
                </span>
              </h3>
            </Col>
          </Row>
          <Row>
            <Col md={8}>              
              <Row>
                <Col mdOffset={1} md={7}>                                    
                  <Row>         
                    <Col md={12}>
                      <h5>
                        <b>About: </b>{course.about} <br/>                        
                      </h5>                                     
                    </Col>             
                  </Row>
                  <Row>
                    <Col md={12}>
                      Interested by {course.num_assigns} student(s)
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <h5> {stars} <Badge bsStyle='primary'>{numReview}</Badge> reviews</h5>
                    </Col>
                  </Row>
                </Col>
                <Col md={4}>
                </Col>
              </Row>
            </Col>            
            <Col md={4}>
              <Row>
                <h5>
                  <b>Prefer schedule: </b>
                  { schedule }
                </h5>              
              </Row>
              <Row>
                <h5>
                  <b>Prefer location: </b>
                  {course.prefer_location}
                </h5>              
              </Row>
              <Row>
                <ButtonAssignCourse course={course} {...this.props}/>                    
              </Row>     
              <Row>
                <br/>
              </Row>         
            </Col>                                      
          </Row>
        </div>
      )
  }
}

export default SimpleCourseItem