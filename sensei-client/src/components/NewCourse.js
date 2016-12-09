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
import Typeahead from 'react-bootstrap-typeahead'
// this.props.router.push('/login') // Danger hehe
class NewCourse extends Component {
  constructor(props) {
    super(props)
    // this.state = {

    // }
    this.submitNewCourse = this.submitNewCourse.bind(this)
  }
  submitNewCourse(e) {
    const form = document.forms['newCourseForm']
    const newCourse = {
      subject: form.subject.value,
      city: cities[form.city.value],
      level: form.level.value,
      price: form.price.value,
      location: form.location.value,
      about: form.about.value,
      teacher: this.props.user._id,
    }

    console.log('Form data:', newCourse)
    const options = {
      method: 'post',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
      body: JSON.stringify(newCourse) 
    }
    fetch('/api/courses/', options)
      .then((res) => res.json())
      .then((data) => {
        if(data.status == 'success') {
          console.log('New course submitted successed')
          this.props.onClose()
          this.props.router.push('/')
          this.props.refreshCourses()
        } else {
          console.log('New course submitted failed', data.messge)
          this.props.onClose()
          this.props.router.push('/')
        }
      })
  }
  render() {
    const user = this.props.user
    console.log('User is:', _.isEmpty(user))        
    let modalBody = (
      <Form horizontal
        id='newCourseForm'
        name='newCourseForm'>
          <FormGroup controlId='mandatorySearch'>
            <Col md={5} mdOffset={1}>
              <FormControl componentClass="select" placeholder="City" name='city' required>
                { cities.map((city, i) => (<option key={i} value={city}>{city}</option>) ) }
              </FormControl>
            </Col>
            <Col md={5}>            
              <Typeahead
                name='subject'
                placeholder='Enter a subject...'
                onChange={this._handleChange}
                options={subjects}
                required
              />               
            </Col>                      
          </FormGroup>
          <hr/>
          <FormGroup controlId='moreFilter'>
            <Col md={4}>
              <FormControl componentClass="select" placeholder="default" name='level' required>
                <option value="default">Chose a level</option>
                { levels.map((level, i) => (<option key={i} value={i}>{level}</option>) ) }
              </FormControl>
            </Col>      
            <Col md={4}>
              <FormControl type='text' placeholder='Price per month' name='price'>
              </FormControl>              
            </Col>
            <Col md={4}>
              <FormControl type='text' placeholder='Prefer location' name='location'>
              </FormControl>
            </Col>
          </FormGroup>          
          <FormGroup bsSize='lg'>
            <textarea
              className='form-control'
              rows={4}
              type='textarea'
              placeholder='Something about this course' 
              name='about'/>                           
          </FormGroup>    
          <FormGroup>
            <Col mdOffset={9} md={3}>
              <Button type='button' bsStyle='success' onClick={this.submitNewCourse}>
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
              Create a new course
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

export default NewCourse