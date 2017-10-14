import React, { Component } from 'react'

class Cell extends Component {
  constructor(props) {
    super(props);
  }

  /*
  -  returning each cell for the respected row and columns
  */

  render() {
    console.log('state',this.props.state, 'row', this.props.rowIndex, 'cell', this.props.cellIndex)
    return (
      <div className="Cell">
        {this.props.state[this.props.rowIndex][this.props.cellIndex]}
      </div>
    )
  }
}

export default Cell;