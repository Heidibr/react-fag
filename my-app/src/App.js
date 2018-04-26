import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/Navbar';
import ResultSubjects from './components/ResultSubjects';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavbarComponent />
          <ResultSubjects />
      </div>
    );
  }
}

export default App;
