import React, { Component } from 'react';
import './App.css';
import Maps from "./Components/Maps";
import Home from './Components/Home';
import Header from './Components/Header';
import Niveau from './Components/Niveau';
import { Animated } from "react-animated-css";
import dent from "./Image/dents.png";
import dentreverse from "./Image/dentsreverse.png";


class App extends Component {
  state = {
    visible: false,
    visible2: false,
    instruction: true

  }
  konami = (e) => {
    e.preventDefault()
    const penis = e.target.value
    const prepuce = "yes"
    const cacaOuette = "test"
    if (penis.toString() === prepuce.toString()) {
      this.setState({
        visible: true,
        visible2: false,
        instruction: false

      })
    }
    else if (penis.toString() === cacaOuette.toString()) {
      this.setState({
        visible2: true,
        visible: false,
        instruction: false
      })
    }
  }
  render() {
    return (
      <div className="Entier">

        <Header />

        
          {this.state.instruction && <div className="instructionfuck"><Home /></div>}
        
        <Niveau visible={this.state.visible} visible2={this.state.visible2} />
        <div className="bouche">
        <img src={dent} style={{ width: "200px", marginTop: '20%', marginLeft: "25%", opacity: 0.6 }} class="animated infinite bounce" alt="" />
        <input className="champsinput" style={{ marginLeft: "27%" }} placeholder="tape ton konami" onChange={(i) => this.konami(i)} />
        <img src={dentreverse} style={{ width: "200px", marginBottom: '20%', marginLeft: "25%", opacity: 0.6 }} class="animated infinite slideInUp" alt="" />
        </div>
        <Maps />


      </div>
    );
  }
}


export default App;
