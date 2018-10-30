import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Niveau from './Components/Niveau';

class App extends Component {
  render() {
    return (
      <div className="black">
        <Header />
        <Niveau />
      </div>
    );
  }
}

export default App;
