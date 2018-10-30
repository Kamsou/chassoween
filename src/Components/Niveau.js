import React from 'react';
import Niveau1 from '../img/Niveau1.gif';
import Niveau2 from '../img/Niveau2.gif';
import './Niveau.css'

class LevelOne extends React.Component {
    render() {
        return(
            <div>
                <div className="Gif">
                    <img src={Niveau1} alt="Homme Masqué Lame"></img>
                </div>

                <div className="Gif">
                    <img src={Niveau2} alt="Citrouille dégoulinante"></img>
                </div>
            </div>
        )
    }

}

export default LevelOne;