import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from './components/Home';
import TestGif from './components/TestGif';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Welcome, sweetheart</h1>
        </header>
        <Router>
          <div>
            <Route exact path='/home' component={Home} /> 
            <Route exact path='/test' component={TestGif} /> 
            <Route exact path='/' render={()=> <Redirect to='/home' />} />
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
