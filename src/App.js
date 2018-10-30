import React, { Component } from 'react';
import './App.css';
import Header from './Components/header';
import Niveau from './Components/Niveau';
// import Page2 from './Components/page2';
// import Inputbutton from './Components/inputbutton';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <div className="black">
        <Header />
        <Home />
        <Niveau />         

      </div>
    );
  }
}

export default App;
