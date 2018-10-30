import React, { Component } from 'react';
import './App.css';
import Maps from "./Components/Maps";
import Home from './Components/Home';
import Header from './Components/Header';
import Niveau from './Components/Niveau';


class App extends Component {
  render() {
    return (
      <div className="Entier">
        <Header />
        <Home />
        <Niveau />
        <Maps/>


      </div>
    );
  }
}


export default App;
