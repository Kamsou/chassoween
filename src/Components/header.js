import React, { Component } from 'react';
import "./header.css";
import Logo from '../img/logo-ween.png'


class Header extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
                <img src={Logo} className="App-logo" alt="logo" />
            </header>
            </div>
        )
    }
}

export default Header;