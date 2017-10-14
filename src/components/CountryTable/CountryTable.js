import React, { Component } from 'react';
import Row from './Row.js'

class CountryTable extends Component {
  constructor() {
    super();
    // sample hardcoded data for city table
    this.state = {
      length: 50,
      '0': ['ID', 'Name', 'CountryCode', 'District', 'Population'],
      '1': [ 'AFG','Afghanistan','Asia','Southern and Central Asia','652090','1919','22720000','45.900002','5976.00','N','Afganistan/Afqanestan','Islamic Emirate','Mohammad Omar','1','AF' ]
    };
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
