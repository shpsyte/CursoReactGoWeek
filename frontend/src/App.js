import React, {Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './pages/Login';
import Timeline from './pages/Timeline';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/timeline" component={Timeline} />
          </Switch>
        </BrowserRouter>
    );


    // return ( <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    //);
  }
}

export default App;