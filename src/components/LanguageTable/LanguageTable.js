import React, { Component } from 'react';
import Row from './Row.js'

class LanguageTable extends Component {
  constructor() {
    super();
    // sample hardcoded data for city table
    this.state = {
      length: 50,
      '0': ['ID', 'Name', 'CountryCode', 'District', 'Population'],
      '1': ['AFG', 'Pashto',  't', 52.400002],
      '2': ['NLD', 'Dutch', 't', 95.599998],
      '3': ['ANT', 'Papiamento',  't', 86.199997],
      '4': ['ALB', 'Albaniana', 't', 97.900002],
      '5': ['DZA', 'Arabic', 't', 86],
      '6': ['ASM', 'Samoan', 't', 90.599998],
      '7': ['AND', 'Spanish', 'f', 44.599998],
      '8': ['AGO', 'Ovimbundu', 'f', 37.200001],
      '9': ['AIA', 'English', 't', 0 ],
      '10': [ 'ARE', 'Arabic', 't', '42' ]
    };
    /* Displayed hardcoded empty new rows to show idea of full table
      ** Delete empty rows once database is connected to dynamically generate rows based on Database entries
    */
    for (let i = 11; i < this.state.length; i++) {
      this.state[i] = [];
    }
  }
  render() {
    const languageTable = [];
    for (let i = 0; i < this.state.length; i++) {
      let row = <Row key= {i} rowIndex= {i} state={this.state}/>
      languageTable.push(row);
    }
    console.log('languageTable------', languageTable)

    // display the LanguageTable within the div container
    return (
      <div id="LanguageTable">
        <div>
          <h1>Language Table</h1>
        </div>
          {languageTable}
      </div>
    )
  }
}

export default LanguageTable;
