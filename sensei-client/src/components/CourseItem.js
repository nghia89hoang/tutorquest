import '../css/CommonItem.css'
import React, {Component} from 'react'
import { Image, Glyphicon, Button,
    Col, Row,    
    Badge} from 'react-bootstrap'
import Level from '../data/level'
import {Link} from 'react-router'
import ButtonAssignCourse from './ButtonAssignCourse'
class CourseItem extends Component {
  constructor(props) {
    super(props)
  }  
  
  render() {
    const {course} = this.props
    const {teacher} = course
    const numReview = course.rating.length || 0
    const ratingNum = course.rating.length
    let schedule
    let location
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
    if( !course.prefer_location || course.prefer_location.length == 0) {
      location = (<div> Negotiable </div>)
    } else {
      location = course.prefer_location
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
          </Row>   
          <Row> 
            <Col md={9}>
              <hr />  
            </Col>
            <Col md={3}>
              <h3 className="pull-right">
                <span 
                  className='label label-info'>
                  Price: ${course.price_per_month}/month
                </span>
              </h3>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <div>
                <Row>
                  <Col md={4}>
                    <Image className='Avatar' src={teacher.facebook.avatar} responsive/>
                  </Col>
                  <Col md={8}>
                    <Row>
                      <h3>
                        <Link className='InfoLink' to={`/profile/${teacher._id}`}> 
                          <span className='label label-info'>
                            {teacher.tutor.display_name} ({teacher.tutor.gender === 'male'? 'Mr' : 'Mr(s)'})
                          </span>
                        </Link> 
                      </h3>
                    </Row>                    
                    <Row>                      
                      <h5>
                        <b>About: </b>{course.about} <br/>                        
                      </h5>                                     
                    </Row>
                    <Row>
                      Interested by {course.num_assigns} student(s)
                    </Row>
                    <Row>
                      <h5> {stars} <Badge bsStyle='primary'>{numReview}</Badge> reviews</h5>
                    </Row>
                  </Col>
                </Row>                
              </div>              
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
            </Col>                                      
          </Row>
        </div>
      )
  }
}

export default CourseItem