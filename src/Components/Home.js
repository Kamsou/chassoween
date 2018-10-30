import React, { Component } from 'react';
import './Home.css';


class Home extends Component {
    render() {
        return (
            <h2 className="intro">
                <p>Vous aimez vous faire peur ? </p>
                <p>Vous aimez les friandises ? </p>
                <p>Si la réponse à ces deux questions est OUI, bienvenue sur Chasso'Ween !</p>
                <p className="how">Comment Faire ? </p>
                <p>Le jeu est simple : dans une image, une vidéo ou autre vous devrez trouver un <a className="link" href="https://fr.wikipedia.org/wiki/Code_Konami">Code Konami</a>,</p>
                <p>c'est à dire une série de caractères (chiffres,symboles ou lettres).</p>
                <p> Une fois le code découvert vous aurez accès à l'adresse à laquelle vous devrez vous rendre pour récupérer vos délicieux gains !</p>
                <p>Compris !? </p>
                <p> À vous de jouer ! ( Âmes sensibles s'abstenir ... )</p>
            </h2>
        )
    }
}

export default Home;