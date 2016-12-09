import '../css/CommonItem.css'
import React, {Component} from 'react'
import {Link} from 'react-router'
import {Row, Col, Image, Dropdown, DropdownButton, MenuItem} from 'react-bootstrap'

class AccountMenu extends Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }
  handleLogout(e) {
    window.FB.logout((res) => {
      console.log('Logout response', res)
      this.props.socialLogout('facebook')
    })

  }
  render() {
    const user = this.props.user
    return (
      <a className=''>                              
        <div className='dropdown'>
          <button className='dropdown-toggle' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">              
            <Image rounded className='SmallAvatar' src={user.facebook.avatar} /> {user.facebook.name}              
          </button>
          <div className='dropdown-menu well' role='menu'>
            <div className='dropdown-item' key={1}>
            <Link to={`/profile/${user._id}`}>
              Profile         
            </Link>                                        
            </div>
            <div className='dropdown-item' key={2} onClick={this.handleLogout}>
              <a>
                Logout
              </a>
            </div>
          </div>          
        </div>                
      </a>
    )
  }
}

export default AccountMenu