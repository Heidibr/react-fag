import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavbarComponent />
      </div>
    );
  }
}

export default App;
