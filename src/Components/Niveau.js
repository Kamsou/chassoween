import React from 'react';
import Niveau1 from '../img/Niveau1.gif';
import Niveau2 from '../img/Niveau2.gif';
import './Niveau.css'
import "./inputbutton.css";

import {Animated} from "react-animated-css";




class Niveau extends React.Component {
  
    render() {
        return(
             <div className="entier">
            
                
               { this.props.visible && <div className="Gif">
                    <img src={Niveau1} alt="Homme Masqué Lame"></img>
                </div>}
                
                {this.props.visible2 && <div className="Gif">
                    <img src={Niveau2} alt="Citrouille dégoulinante"></img>
                </div>}
                
                
            </div>
        )
    }

}

export default Niveau;