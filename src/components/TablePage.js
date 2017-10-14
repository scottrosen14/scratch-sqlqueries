import React, { Component } from 'react';
import Row from './row.js'
import '../styles/TablePage.css';

class TablePage extends Component {
  constructor() {
    super();
    this.state = {
      length: 50,
      '0': ['ID', 'Name', 'CountryCode', 'District', 'Population'],
      '1': [1, 'Kabul', 'AFG', 'Kabol', 1780000],
      '2': [2, 'Qandahar', 'AFG', 'Qandahar', 237500],
      '3': [3, 'Herat', 'AFG', 'Herat', 186800],
      '4': [4, 'Mazar-e-Sharif', 'AFG', 'Balkh', 127800]
    };
    for (let i = 5; i < this.state.length; i++) {
      this.state[i] = [];
    }
  }
  render() {
    const rows = [];
    for (let i = 0; i < this.state.length; i++) {
      let row = <Row key= {i} rowIndex= {i} state={this.state}/>
      rows.push(row);
    }
    console.log('rows------', rows)
    return (
      <div id="TablePage">
        <div><h1>City Table</h1></div>
        <div id="TableHeader">

        </div>
        <div id="data">
          {rows}
        </div>
      </div>
    )
  }
}

export default TablePage;
