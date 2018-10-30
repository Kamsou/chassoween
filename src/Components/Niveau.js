import React from 'react';
import Niveau1 from '../img/Niveau1.gif';
import Niveau2 from '../img/Niveau2.gif';
import './Niveau.css'
import "./inputbutton.css";
import dent from "../Image/dents.png";
import dentreverse from "../Image/dentsreverse.png";
import {Animated} from "react-animated-css";


const pStyle = {
    opacity: '0.6'
  };

const white = {
    color: 'white'
};

class Niveau extends React.Component {
    state = {
        visible : false,
        visible2: false
        
      }
      konami = (e) =>  {
        e.preventDefault()
        const penis = e.target.value
        const prepuce = "vagin"
        const cacaOuette = "test"
        if (penis.toString() == prepuce.toString()){
          this.setState({
            visible : true,
            visible2: false
            
          })
        }
        else if (penis.toString() == cacaOuette.toString()){
            this.setState({
              visible2 : true,
            visible: false
            })
          }
      }
    render() {
        return(
             <div className="entier">
            <img src={dent} style={pStyle} width="50%" class="animated infinite bounce" alt="" ></img>
                <input onChange={(i)=> this.konami(i)} />
            <img src={dentreverse} style={pStyle} width="50%" class="animated infinite slideInUp" alt=""></img>    
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={this.state.visible}>
                <div className="Gif">
                    <img src={Niveau1} alt="Homme Masqué Lame"></img>
                </div>
                </Animated>
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={this.state.visible2}>
                <div className="Gif">
                    <img src={Niveau2} alt="Citrouille dégoulinante"></img>
                </div>
                </Animated>
                
            </div>
        )
    }

}

export default Niveau;