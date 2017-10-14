import React, { Component } from 'react';
import Row from './Row.js'

class CountryTable extends Component {
  constructor() {
    super();
    // sample hardcoded data for city table
    this.state = {
      length: 50,
      '0': ['Code', 'Name', 'Continent', 'Region', 'Population', 'Capital'],
      '1': [ 'AFG','Afghanistan','Asia','Southern and Central Asia','652090', null],
      '2': [ 'NLD','Netherlands','Europe','Western','Europe','41526','null' ]
    };
    /* Displayed hardcoded empty new rows to show idea of full table
      ** Delete empty rows once database is connected to dynamically generate rows based on Database entries
      this.state.length includes empty rows
    */
    for (let i = 2; i < this.state.length; i++) {
      this.state[i] = [];
    }
  }
  render() {
    const countryTable = [];
    for (let i = 0; i < this.state.length; i++) {
      let row = <Row key= {i} rowIndex= {i} state={this.state}/>
      countryTable.push(row);
    }

    // display the countryTable within the div container
    return (
      <div id="CountryTable">
        <div>
          <h1>Country Table</h1>
        </div>
          {countryTable}
      </div>
    )
  }
}

export default CountryTable;
