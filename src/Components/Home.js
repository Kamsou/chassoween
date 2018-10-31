import React, { Component } from 'react';
import './Home.css';
import {Animated} from "react-animated-css";


class Home extends Component {

    state = {
        instruction: true
                
      }
      konami = (e) =>  {
        e.preventDefault()
        const penis = e.target.value
        const prepuce = "yes"
        const cacaOuette = "test"
        if (penis.toString() === prepuce.toString()){
          this.setState({
            instruction : false
            
            
          })
        }
        else if (penis.toString() === cacaOuette.toString()){
            this.setState({
              instruction : false
          
            })
          }
      }
    render() {
        return (
            <div className="intro">
              <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={this.state.instruction}>
                <div className="instruction">
                    <p>Vous aimez vous faire peur ? </p>
                    <p>Vous aimez les friandises ? </p>
                    <p>Si la réponse à ces deux questions est OUI, bienvenue sur Chasso'Ween !</p>
                    <p className="how">Comment Faire ? </p>
                    <p>Le jeu est simple : dans une image, une vidéo ou autre vous devrez trouver un <a className="link" href="https://fr.wikipedia.org/wiki/Code_Konami">Code Konami</a>,</p>
                    <p>c'est à dire une série de caractères (chiffres,symboles ou lettres).</p>
                    <p> Une fois le code découvert vous aurez accès à l'adresse à laquelle vous devrez vous rendre pour récupérer vos délicieux gains !</p>
                    <p>Compris !? </p>
                    <p> À vous de jouer ! Le code Konami pour commencer est "Start" ( Âmes sensibles s'abstenir ... )</p>
                    
                    
                    
                </div>
                </Animated>
            </div>
        )
    }
}

export default Home;