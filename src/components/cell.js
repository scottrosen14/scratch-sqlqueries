import React, { Component } from 'react'

class Cell extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('Row----', this.props.cellIndex)
    return (
      <div className="Cell">
        {this.props.state[this.props.rowIndex][this.props.cellIndex]}
      </div>
    )
  }
}

export default Cell;