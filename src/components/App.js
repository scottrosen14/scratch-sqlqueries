import React, { Component } from 'react';
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import TablePage from './TablePage'
import '../styles/App.css';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/home' component={HomePage} />
          <Route path='/table' component={TablePage} />
          <Route exact path='/' component={LoginPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
