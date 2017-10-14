import React, { Component } from 'react';
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import '../styles/App.css';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  //our app is showing login page and home page
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/home' component={HomePage} />
          <Route exact path='/' component={LoginPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
