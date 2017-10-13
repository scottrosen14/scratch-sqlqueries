import React, { Component } from 'react';
import { render } from 'react-dom';

class Login extends React.Component{
    render(){
        const { username, password, error, onUsernameChange, onPasswordChange, onLoginSubmit } = this.props
        return(
        <div>
            <form className='form' onSubmit={e => { onLoginSubmit(); e.preventDefault(); } }>        
                <input type='text' className='name' placeholder='Enter Username' value={username} onChange={e => onUsernameChange(e.target.value)} ></input>
                <br />
                <input type='password' className='pass' placeholder='Enter Password' value={password} onChange={e => onPasswordChange(e.target.value)}></input>
                <br />
                <input className='login' type='submit' value='Login' />
                {error && <p>{error}</p>} 
            </form>
        </div>
        )
    }
}
export default Login;