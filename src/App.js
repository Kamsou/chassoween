import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Niveau from './Components/Niveau';
import Home from './Components/Home'


class App extends Component {
  render() {
    return (
      <div className="Entier">
        <Header />
        <Home />
        <Niveau />


      </div>
    );
  }
}

export default App;
