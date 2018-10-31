import React from 'react';
import './Header.css';
import logo from '../img/logo-ween.png';
import {Animated} from "react-animated-css";

class Header extends React.Component {
    render() {
        return(
            <div className="App">
            <header className="App-header">
            <Animated animationIn="bounce" animationOut="bounce" > <img src={logo} className="App-logo" alt="logo" /></Animated>
            </header>
            </div>
        )
    }
}

export default Header;