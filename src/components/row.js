import React, { Component } from 'react'
import Cell from './cell.js'

class Row extends Component {
  render() {
    const row = [];
    // iterate up to row length to add all cells to a row
    for (let i = 0; i < 5; i++) {
      let cell = <Cell key= {i} state={this.props.state} rowIndex={this.props.rowIndex} cellIndex={i}/>
      row.push(cell)
      console.log('cellIndex', this.props.rowIndex * 5 + i)
    }
    return (
      <div className="Row">
        {row}
      </div>
    )
  }
}


export default Row;