import React, {Component} from 'react'
import {Jumbotron} from 'react-bootstrap'
import config from '../config'
import _ from 'lodash'
// import fetch from 'node-fetch'

class Login extends Component {  
  constructor(props) {
    super(props)       
    this.handleClick = this.handleClick.bind(this)
    this.loginStatusChangeCallback = this.loginStatusChangeCallback.bind(this)
    // this.checkLoginState = this.checkLoginState.bind(this)
  }  
  componentDidMount() {    
    
  }
  gatherFBInfo(authResponse) {    
    window.FB.api('/me', 'get', {
      fields: 'id,name,email,gender,birthday'}, (response) => {
      console.log('Successful login for: ', response)
      document.getElementById('status').innerHTML = 
        'Thanks for logging in, ' + response.name + '!'
      window.FB.api('/me/picture', 'get', {type: 'normal'}, (pictureResponse) => {
        console.log('Picture get:', pictureResponse)
        const socialProfile = {
          provider: 'facebook', 
          id: response.id,
          name: response.name,
          token: authResponse.accessToken,
          email: response.email,
          gender: response.gender,
          picture: pictureResponse.data.url
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
    })
  }  
  loginStatusChangeCallback(response) {
    console.log('statusChangeCallback: ', response)
    if(response.status == 'connected') {
      const user = this.props.user
      if(_.isEmpty(user)) {
        this.gatherFBInfo(response.authResponse)
      } else {
        console.log('User already logined: ', user)
      }
    } else if (response.status == 'not_authorized') {
      document.getElementById('status').innerHTML = 'Please login Facebook!'
    } else {
      document.getElementById('status').innerHTML = 'Please Login this App!'
    }
  }
  handleClick() {
    window.FB.login((response) => {
      this.loginStatusChangeCallback(response) 
      }, 
      {
        scope: 'public_profile,email',
        enable_profile_selector: true,
        return_scopes: true
      }
    )
  }
  // TODO: Loggin in client side instead of server 
  render() {
    return (
      <div>
        <Jumbotron> 
          <div id='status'></div>
          <h1><span className='fa fa-lock'></span> Login </h1>
          <p>Login with:</p>          
          <a href='#' onClick={this.handleClick} className='btn btn-primary'><span className='fa fa-facebook'></span> Facebook</a>
          <a href={`${config.SERVER_URL}api/users/auth/twitter`} className='btn btn-info'><span className='fa fa-twitter'></span> Twitter</a>
          <a href={`${config.SERVER_URL}api/users/auth/google`} className='btn btn-danger'><span className='fa fa-google-plus'></span> Google+</a>
        </Jumbotron>
      </div>
      )
  }
}

export default Login
// <a href='/login' className='btn btn-default'><span className='fa fa-user'></span> Local Login</a>
// <a href='/signup' className='btn btn-default'><span className='fa fa-user'></span> Local Signup</a>