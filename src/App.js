import React, { Component } from 'react';
import sql from './sql.png'; 
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={sql} />
            <h1 className="App-title">Query Game</h1>
          </header>
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/" component={LoginPage}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
