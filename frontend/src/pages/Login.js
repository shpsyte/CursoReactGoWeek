import React, { Component } from 'react';
import './Login.css';
import twitterLogo from '../twitter.svg'

// import { Container } from './styles';

export default class Login extends Component {

  state = {
      username: '',
  };

  handleOnSubmit = (e) => {
      e.preventDefault();

      const { username } = this.state;
       

      if (!username.length) return;

      localStorage.setItem('@GoTwitter:username', username);
      this.props.history.push('/timeline');


  }

  handleInputChange = (e) =>{
      this.setState({ username: e.target.value });
  }

  render() {
    return (
            <div className="login-wrapper">
                <img src={twitterLogo} alt="GoTwitter"></img>
                <form onSubmit={this.handleOnSubmit}>
                    <input value={this.state.username} 
                           onChange={this.handleInputChange}
                           
                           placeholder="Nome de Usuário" />
                    <button type="submit">Entrar</button>
                </form>


            </div>
    
        )
  }
}
