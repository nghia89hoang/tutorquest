import '../css/App.css'
import React, { Component } from 'react'
import Hud from './Hud'
import store from '../store'

class Main extends Component {
  render() {    
    return (            
      <div>
        <Hud {...this.props}/>
        <div className='body container-fluid'>
          { React.cloneElement(this.props.children, this.props) }
        </div>
      </div>      
    )
  }
}

export default Main