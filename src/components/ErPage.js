import React, { Component } from 'react';
import '../styles/ErPage.css';
import er from '../ER.png'; 

class ErPage extends Component {
  render() {
      return (
        <div>
        <p>ER</p>
        <img src={er} />
        </div>
      )
  }
}

export default ErPage;
