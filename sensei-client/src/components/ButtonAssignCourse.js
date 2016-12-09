import React, {Component} from 'react'
import { Button, Label } from 'react-bootstrap'
import AssignForm from './AssignForm'

class ButtonAssignCourse extends Component {
  constructor(props) {
    super(props)    
    this.onClose = this.onClose.bind(this)
    this.onOpen = this.onOpen.bind(this)
    this.state = {
      showModal: false
    }
  }
  onClose() {
    this.setState({
      showModal:false
    })
  }
  onOpen() {
    this.setState({
      showModal: true
    })
  }
  render() {
    const {course} = this.props
    const {user} = this.props
    let content
    console.log('Button Assign course status')
    if(course.teacher._id != user._id) {
      console.log('Assignments: ', course.assignments);
      if (course.assignments){
        const isAssigned = course.assignments.find((a) => (a.student._id == user._id))
        console.log('isAssigned', isAssigned)
        if(isAssigned) {
          content = (
            <div>
              <h5>
                <b>Status:</b> <span className='label label-warning'> {isAssigned.status} </span> 
              </h5>              
            </div>
            )
        } else {
          content = (
            <div>
              <AssignForm showModal={this.state.showModal} 
              onClose={this.onClose}
              course={course}
              user={user}
              {...this.props}/>
              <button onClick={this.onOpen} className='InfoLink btn btn-primary'>
                Assign
              </button>
            </div>
          )
        }
      }      
    } else {
      content = (<div></div>)
    }
    return (
      <div>     
        {content}
      </div>
    )
  }
}

export default ButtonAssignCourse