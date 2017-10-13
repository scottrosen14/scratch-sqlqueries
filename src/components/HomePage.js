import React, { Component } from 'react';
import { Redirect, Link, Route } from 'react-router-dom'
import ErPage from './ErPage'
import TablePage from './TablePage'
import Home from './Home'
import '../styles/HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className='HomePage'>
          <div className='navigation'>
            <div className='topnav'>
              <Link to='/home/er'>ER</Link>
              <Link to='/home/table'>Table</Link>
            </div>
          </div>
          <Route exact path='/home/table' component={TablePage} />
          <Route exact path='/home/er' component={ErPage} />
          <Home />
      </div>
    )
  }
}

export default HomePage;
