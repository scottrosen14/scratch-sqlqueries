import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './HomePage.css';

class HomePage extends Component {
  render() {
    const { username } = this.props.location.state || { username: '' }
    if (!username) {
      return (
        <Redirect to='/' />
      )
    } else {
      return ( 
        <div>Welcome: {username}
        <div className="topnav" id="myTopnav">
          <Link to="/er">ER</Link>
          <Link to="/table">Table</Link>
      </div>
        </div>

        // here will be added next page with navigation and input box
      )
    }
  }
}

export default HomePage;
