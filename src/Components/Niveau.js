import React from 'react';
import './Niveau.css'
import "./inputbutton.css";




class Niveau extends React.Component {
  
    render() {
        if (this.props.visible)
        return(
             <div className="entier">
            
                
             <div className="Gif">
                    <img src={this.props.image} alt="Gif"></img>
                </div>
                
            
                
            </div>
        )
        else return(<></>)
    }

}

export default Niveau;