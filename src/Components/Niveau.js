import React from 'react';
import Niveau1 from '../img/Niveau1.gif';
import Niveau2 from '../img/Niveau2.gif';
import SilenceLamb from '../img/SilenceLamb.gif';
import Puppet from '../img/Puppet.gif';
import Scream from '../img/Scream.gif';
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
                </div>

                <div className="Gif">
                    <img src={Scream} alt="girls just wanna have fun"></img>
                </div>

                <div className="Gif">
                    <img src={SilenceLamb} alt="Papillon de nuit zoom"></img>
                </div>

                <div className="Gif">
                    <img src={Puppet} alt="trouve l'intru"></img>
                </div>

            </div>
        )
    }

}

export default Niveau;