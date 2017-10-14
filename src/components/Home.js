import React, { Component } from 'react';
import { render } from 'react-dom';
import '../styles/Home.css';
import Timer from './Timer';

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            query: '', 
            result: []
        }

        // it looks like binding with arrow functions in create-react-app (btw. I hate crp!) is not working so we
        // need to bind our functions here 
        // there is a better way to create state in homepage and pass it like props here, but .... xD
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.onQueryChange = this.onQueryChange.bind(this)
    }

    // 
    onQueryChange(e) {
        const value = e.target.value;
        this.setState(state => ({ query: value }))
    }

    handleKeyPress(e) {
        // when user press enter after he inserted query in input box he is sending get request to the server and waiting for response
        if (e.key === 'Enter') {
            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = () => {
                let DONE = 4; // readyState 4 means the request is done.
                let OK = 200; // status 200 is a successful return.
                console.log(xhr.status)
                if (xhr.readyState === DONE) {
                    if (xhr.status === OK)
                    console.log('OK')
                        this.setState(state => {
                            return {
                                result: JSON.parse(xhr.responseText),
                            };
                        });
                } else {
                    console.log('Error: ' + xhr.status); // An error occurred during the request.
                }
            };

            xhr.open('GET', '/api/query?query=' + encodeURIComponent(this.state.query));
            xhr.send(null);
        }
    }
    render() {
        // this is storing results because we're displaying results at the page inside div {resQuery}
        let resQuery=[];
        if(this.state.result.rows !== null && this.state.result.rows !== undefined){
            for(let i=0; i<this.state.result.rows.length; i+=1){
                resQuery.push(<p>{this.state.result.rows[i].name}</p>)
            }
        }
        return (
            <div>
                Clue 1: Find all countries in Europe
                <br />
                Clue 2: Find all languages in the Netherlands where the percentage is less than 1
                <br />
                Clue 3: Find cities in Europe where country name is Netherlands 
                <br />
                <input type='text' className='queryInput' placeholder='Enter Query' value={this.state.query} onChange={this.onQueryChange} onKeyPress={this.handleKeyPress}></input>
                <div>
                    {resQuery}
                </div>
                <br />
                <Timer/>
            </div>
        )
    }
}
export default Home;