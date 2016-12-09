import '../css/CommonItem.css'
import React, {Component} from 'react'
import {Link} from 'react-router'
import { Row, Col, Image } from 'react-bootstrap'
import _ from 'lodash'

class TeacherBio extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    const {teacher} = this.props
    if(!teacher || _.isEmpty(teacher)) {
      return (
        <div></div>
      )
    } else {
      return (
        <div className='panel panel-primary'>
          <div className='panel-heading'>
            <div className='panel-title'>
              Teacher bio
            </div>
          </div>
          <div className='panel-body container-fluid'>
            <Row>                          
              <Col md={5}>
                <Image className='Avatar' src={teacher.facebook.avatar}  responsive/>            
              </Col>
              <Col md={7}>                          
                <Row>
                  <Col md={12}>              
                    <h4>
                      <Link to={`/profile/${teacher._id}`}>
                        {teacher.tutor.display_name}
                      </Link>
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <h4>
                      Gender: {teacher.tutor.gender}
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <h4>
                      DoB: {teacher.tutor.dob}
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <h4>
                      City: {teacher.tutor.city}
                    </h4>
                  </Col>
                </Row>
                <Row>
                <br />
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h4>
                  Subjects: {teacher.tutor.subjects.map((s) => (s + ', '))}
                </h4>
              </Col>
              <Col md={12}>
                <h4>
                  Education: {teacher.tutor.education}
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h4>
                  About: {teacher.tutor.more_info}
                </h4>
              </Col>
            </Row>    
          </div>              
        </div>
      )
    }
  }
}

export default TeacherBio