import React, { Component } from 'react';
import { Redirect, Link, Route } from 'react-router-dom'
import ErPage from './ErPage'
import TablePage from './TablePage'
import Home from './Home'
import '../styles/HomePage.css';

class HomePage extends Component {
  // because home page contains er, tables and home component we're linking thoose first two in navigatio
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
