import '../css/App.css'
import React, {Component} from 'react'
import { Form, Grid,
    Modal,
    Col,
    FormControl,    
    FormGroup,
    Button } from 'react-bootstrap'
import cities from '../data/city'
import levels from '../data/level'
import priceRanges from '../data/pricerange'
import subjects from '../data/subjects'
import _ from 'lodash'
const genders = ['Male', 'Female']

// this.props.router.push('/login') // Danger hehe
class AssignForm extends Component {
  constructor(props) {
    super(props)
    this.submitAssignment = this.submitAssignment.bind(this)
  }
  submitAssignment(e) {
    const form = document.forms['newAssignment']
    const newAssignment = {
      student: this.props.user._id,
      message: form.message.value     
    }

    console.log('Form data:', newAssignment)
    const options = {
      method: 'put',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
      body: JSON.stringify(newAssignment) 
    }
    fetch(`/api/courses/${this.props.course._id}/assign`, options)
      .then((res) => res.json())
      .then((data) => {
        if(data.status == 'success') {
          console.log('New assignment submitted successed')
          this.props.onClose()
        } else {
          console.log('New assignment submitted failed', data.messge)
          this.props.onClose()
          this.props.router.push('/')
        }
      })
  }
  render() {
    const user = this.props.user        
    let modalBody = (
      <Form horizontal
        id='newCourseForm'
        name='newAssignment'>                              
          <FormGroup bsSize='lg'>
            <textarea
              className='form-control'
              rows={4}
              type='textarea'
              placeholder='Your message to teacher' 
              name='message'/>                           
          </FormGroup>    
          <FormGroup>
            <Col mdOffset={9} md={3}>
              <Button type='button' bsStyle='success' onClick={this.submitAssignment}>
                Submit
              </Button> 
            </Col>
          </FormGroup>         
        </Form>
    )    
    if(_.isEmpty(user)) {
      modalBody = (
        <div>
          You need to login first!
        </div>
      )            
    }
    return (
      <div className='modal-container'>
        <Modal 
          show={this.props.showModal} 
          dialogClassName="custom-modal"
          onHide={this.props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Assign for {this.props.course.subject} -{levels[this.props.course.level]}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {modalBody}
          </Modal.Body>
        </Modal>
      </div>      
    )
  }
}

export default AssignForm