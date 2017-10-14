import React, { Component } from 'react';
import { Redirect, Link, Route } from 'react-router-dom'
import ErPage from './ErPage'
import TablePage from './TablePage'
import CityTable from './CityTable/CityTable.js'
import CountryTable from './CountryTable/CountryTable.js'
import LanguageTable from './LanguageTable/LanguageTable.js'
import Home from './Home'
import '../styles/HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className='HomePage'>
          <div className='navigation'>
            <div className='topnav'>
              <Link to='/home/er'>ER</Link>
              <Link to='/home/citytable'>City Table</Link>
              <Link to='/home/countrytable'>Country Table</Link>
              <Link to='/home/languagetable'>Language Table</Link>
            </div>
          </div>
          <Route exact path='/home/citytable' component={CityTable} />
          <Route exact path='/home/countrytable' component={CountryTable} />
          <Route exact path='/home/languagetable' component={LanguageTable} />
          <Route exact path='/home/er' component={ErPage} />
      </div>
    )
  }
}

export default HomePage;
