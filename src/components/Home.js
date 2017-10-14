import React, { Component } from 'react';
import { render } from 'react-dom';
import '../styles/Home.css';

class Home extends React.Component{
    render(){
        return(
        <div>

        <input type='text' className='queryInput' placeholder='Enter Query'></input>

        </div>
        )
    }
}
export default Home;