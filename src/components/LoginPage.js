import React, { Component } from 'react';
import Login from './Login'
import { Redirect } from 'react-router-dom'
import '../styles/LoginPage.css';
import sql from '../sql.png'; 

class LoginPage extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      error: '',
      isSuccessfulLogin: false
    }

    this.onUsernameChange = this.onUsernameChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onLoginSubmit = this.onLoginSubmit.bind(this)
  }

  onUsernameChange (username) {
    this.setState(state => ({ username }))
  }
  onPasswordChange (password) {
    this.setState(state => ({ password }))
  }
  onLoginSubmit () {
    const { username, password } = this.state
    if (username === 'jelena' && password === '1234') {
      this.setState(state => ({ error: '', isSuccessfulLogin: true }))
    } else {
      this.setState(state => ({ error: 'Invalid username and password.' }))
    }
  }

  render() {
    const { username, password, error, isSuccessfulLogin } = this.state
    if (isSuccessfulLogin) {
      return (
        <Redirect to={{
          pathname: '/home/er',
          state: { username }
        }}/>
      )
    } else {
      return ( 
         <div className='Login'>
          <header className='Login-header'>
            <img src={sql} />
            <h1 className='Login-title'>Query Game</h1>
          </header>
        <Login username={username} password={password} error={error} 
          onUsernameChange={this.onUsernameChange} 
          onPasswordChange={this.onPasswordChange} 
          onLoginSubmit={this.onLoginSubmit}
          />
          </div>
      )
    }
  }
}

export default LoginPage;
