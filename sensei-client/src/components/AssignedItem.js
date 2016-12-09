import '../css/CommonItem.css'
import React, {Component} from 'react' 
import {Button, Row, Col, Image} from 'react-bootstrap'
import {Link} from 'react-router'
class AssignedItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const assignment = this.props.assignment
    return (      
      <div className='CardItem'>
        <Row>
          <Col md={10}>
            <Row>
              <Col md={9}>
                <Image rounded src={assignment.student.facebook.avatar} className="SmallAvatar"/>            
                <Link to={`/profile/${assignment.student._id}`}>
                  { assignment.student.facebook.name}
                </Link>                        
              </Col> 
            </Row>
            <Row>
              <Col md={12}>
                <span className='tag'>
                  {assignment.status}
                </span>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                {assignment.message}
              </Col>
            </Row>
          </Col>
          <Col md={2}>
            <Button bsStyle='success'>Approve</Button>
          </Col>
        </Row>                
      </div>         
    )
  }
}
//
export default AssignedItem