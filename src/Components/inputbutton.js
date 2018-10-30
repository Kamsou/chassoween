import React, { Component } from 'react';
import "./inputbutton.css";
import dent from "../Image/dents.png";
import dentreverse from "../Image/dentsreverse.png";

const pStyle = {
    opacity: '0.6'
  };

const white = {
    color: 'white'
};

class Inputbutton extends Component {

    render() {
        return (
            <div className="entier">
                <img src={dent} style={pStyle} width="50%" class="animated infinite bounce" alt="" ></img>
                <form>
  <label >
    <p class="animated flipOutY delay-1s" style={white}>tape ton texte</p>
        <input type="text" placeholder="konami code" class="animated infinite jello" className="Barre2input"/>
            </label>
            
            </form>
            <img src={dentreverse} style={pStyle} width="50%" class="animated infinite slideInUp" alt=""></img>

             </div>
                    )
                     ;
         
             }
         
         }
         
export default Inputbutton;