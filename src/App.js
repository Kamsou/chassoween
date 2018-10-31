import React, { Component } from "react";
import "./App.css";
import Maps from "./Components/Maps";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Niveau from "./Components/Niveau";
import dent from "./Image/dents.png";
import dentreverse from "./Image/dentsreverse.png";

let map = undefined;

class App extends Component {
  state = {
    visible: false,
    visible2: false,
    visible3: false,
    instruction: true,
    enigma: undefined
  };
  konami = e => {
    const input = e.target.value;
    const start = "Start";
    const test1 = "Youpi";
    const test2 = "qe3d4";
    if (input.toString().toLowerCase() === start.toString().toLowerCase()) {
      this.setState({
        visible: true,
        visible2: false,
        instruction: false
      });
    } else if (
      input.toString().toLowerCase() === test1.toString().toLowerCase()
    ) {
      this.setState({
        visible: false,
        visible2: true,
        instruction: false
      });
    } else if (
      input.toString().toLowerCase() === test2.toString().toLowerCase()
    ) {
      this.setState({
        visible: false,
        visible2: false,
        visible3: true,
        visible4: false,
        instruction: false
      });
    }
  };

  getNext = () => {
    map = undefined;
    this.setState({
      visible2: false,
      visible3: false,
      visible4: true,
      instruction: false
    });
  };

  render() {
    if (this.state.visible2 || this.state.visible3) {
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

        <Niveau
          visible={this.state.visible}
          visible2={this.state.visible2}
          visible3={this.state.visible3}
          visible4={this.state.visible4}
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
