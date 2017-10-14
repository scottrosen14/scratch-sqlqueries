import React, { Component } from 'react';
import Row from './Row.js'

class CityTable extends Component {
  constructor() {
    super();
    // sample hardcoded data for city table
    this.state = {
      length: 50,
      '0': ['ID', 'Name', 'CountryCode', 'District', 'Population'],
      '1': [1, 'Kabul', 'AFG', 'Kabol', 1780000],
      '2': [2, 'Qandahar', 'AFG', 'Qandahar', 237500],
      '3': [3, 'Herat', 'AFG', 'Herat', 186800],
      '4': [4, 'Mazar-e-Sharif', 'AFG', 'Balkh', 127800],
      '5': [5, 'Amsterdam', 'NLD', 'Noord-Holland', 731200]
    };
    /* Displayed hardcoded empty new rows to show idea of full table
      ** Delete empty rows once database is connected to dynamically generate rows based on Database entries
    */
    for (let i = 6; i < this.state.length; i++) {
      this.state[i] = [];
    }
  }
  render() {
    const cityTable = [];
    for (let i = 0; i < this.state.length; i++) {
      let row = <Row key= {i} rowIndex= {i} state={this.state}/>
      cityTable.push(row);
    }
    console.log('cityTable------', cityTable)

    // display the cityTable within the div container
    return (
      <div id="CityTable">
        <div>
          <h1>City Table</h1>
        </div>
          {cityTable}
      </div>
    )
  }
}

export default CityTable;
