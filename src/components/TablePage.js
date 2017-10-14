import React, { Component } from 'react';
import { Redirect, Link, Route } from 'react-router-dom'
import CityTable from './CityTable/CityTable'
import '../styles/TablePage.css';

class TablePage extends Component {
  constructor() {
    super();
    // sample hardcoded data for city table
}
  render() {
    return (
      <div id="CityTable">
        <CityTable/>
      </div>
    )
  }
}

export default TablePage;
