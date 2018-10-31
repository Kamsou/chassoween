import React, { Component } from "react";
import "./App.css";
import Maps from "./Components/Maps";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Niveau from "./Components/Niveau";
import dent from "./Image/dents.png";
import dentreverse from "./Image/dentsreverse.png";
import Niveau1 from './img/Niveau1.gif';
import Niveau2 from './img/Niveau2.gif';
import Niveau3 from './img/Puppet.gif';
import Niveau4 from './img/Scream.gif';
import Niveau5 from './img/SilenceLamb.gif';
import Niveau6 from './img/ToyStoryShinning.gif';
import Niveau7 from './img/freddy.gif';
import Niveau8 from './img/esther.gif';
import Niveau9 from './img/chucky.gif';

let map = undefined;

class App extends Component {
  state = {
    visible: false,
    instruction: true,
    enigma: undefined,
    map: false,
    
    tableau: [
      Niveau1,
      Niveau2,
      Niveau3,
      Niveau4,
      Niveau5,
      Niveau6,
      Niveau7,
      Niveau8,
      Niveau9
    ],
    tableaureponse: [
      "Youpi",
      "qe3d4",
      "Puppet",
      "Scream",
      "Naked",
      "shining",
      "freddy",
      "esther",
      "chucky"

      
    ],
    indice: Math.floor(Math.random() * 9),
  };


  
  konami = e => {
    const input = e.target.value;
    const start = "Start";
    if (input.toString().toLowerCase() === start.toString().toLowerCase()) {
      this.setState({
        map: false,
        instruction: false,
        visible:true,
        indice:Math.floor(Math.random() * 9)

      });
    } else if (
      input.toString().toLowerCase() === this.state.tableaureponse[this.state.indice].toString().toLowerCase()
    ) {
      this.setState({
        map: true,
        instruction: false,
        visible:false
      });
    } 
  };

  getNext = () => {
    map = undefined;
    let randomIndex=Math.floor(Math.random() * 9)
    while (randomIndex===this.state.indice) 
      randomIndex=Math.floor(Math.random() * 9)
    this.setState({
      visible: true,
      instruction: false,
      map:false,
      indice:randomIndex
    });
    
  };

  render() {
    if (this.state.map) {
      map = <Maps suivant={this.getNext} />;
    }

    let enigme = (
      <div className="Entier">
        <Header />

        {this.state.instruction && (
          <div className="instructionfuck">
            <Home />
          </div>
        )}
        {console.log(this.state.tableau)}
        <Niveau
          image={this.state.tableau[this.state.indice]}
          visible={this.state.visible}
        />
        <div className="bouche">
          <img
            src={dent}
            style={{
              width: "200px",
              marginTop: "20%",
              marginLeft: "25%",
              opacity: 0.6
            }}
            class="animated infinite bounce"
            alt=""
          />
          <input
            className="champsinput"
            style={{ marginLeft: "27%" }}
            placeholder="tape ton konami"
            onChange={i => this.konami(i)}
          />
          <img
            src={dentreverse}
            style={{
              width: "200px",
              marginBottom: "20%",
              marginLeft: "25%",
              opacity: 0.6
            }}
            class="animated infinite slideInUp"
            alt=""
          />
        </div>
      </div>
    );

    if (map !== undefined) {
      enigme = undefined;
    } else {
      return enigme;
    }

    return (
      <div>
        {enigme}
        {map}
      </div>
    );
  }
}

export default App;
