import '../css/CommonItem.css'
import React, {Component} from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router'
import _ from 'lodash'
import NewCourse from './NewCourse'
import AccountMenu from './AccountMenu'

class Hud extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
    this.onClose = this.onClose.bind(this)
    this.onOpen = this.onOpen.bind(this)
  }
  onClose() {
    this.setState({
      showModal:false
    })
  }
  componentDidMount(){
    window.fbAsyncInit = () => {
      window.FB.init({
        appId   : '146200182513229',
        cookie  : true,
        xfbml   : true,
        version : 'v2.8'
      })
      window.FB.getLoginStatus((response) => {
        console.log('Get login status')
        this.loginStatusChangeCallback(response)      
      })
    }
    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'))
  }
  loginStatusChangeCallback(response) {    
    if(response.status == 'connected') {
      const user = this.props.user
      if(_.isEmpty(user)) {
        window.FB && window.FB.api('/me', 'get', (resp) => {
          const socialProfile = {
            provider: 'facebook', 
            id: resp.id
          }      
          const options = {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify(socialProfile)
          }     
          fetch('/api/users/loginOrSignup/', options).then((res) => {
            return res.json()
          }).then((data) => {
            console.log('Login callback', data)
            this.props.socialLogin('facebook', data)
          })
        })
      } else {
        console.log('User already logined: ', user)
      }
    }
  }
  onOpen() {
    this.setState({
      showModal: true
    })
  }
  render() {
    const user = this.props.user
    const LoginButton = (
      <Link to='/login'>
        Login
      </Link>
    )        
    const Account = user && !_.isEmpty(user) ? (<AccountMenu {...this.props} />) : LoginButton
    return (
      <div className='navbar navbar-default'>       
        <div className='navbar-header'>
          <Link className='navbar-brand AppName' to='/'>myTutor!</Link>        
        </div>                   
        <ul className='nav navbar-nav pull-right nav-inline'>                 
          <li className='nav-item btn-danger' onClick={this.onOpen}>
            <Link className='' to="#">            
                Post a course            
            </Link>
          </li>        
          <li className='nav-item btn-primary' >
            {Account}
          </li>           
        </ul>
        <NewCourse showModal={this.state.showModal} onClose={this.onClose} {...this.props}/>
      </div>
    )
  }
}

export default Hud