import React, { Component } from 'react';
import '../styles/ErPage.css';
import er from '../ER.png'; 

class ErPage extends Component {
  render() {
      return (
        <div>
        <h1 className='erTitle'>Entity relationship diagram</h1>
        <img src={er} />
        </div>
      )
  }
}

export default ErPage;
