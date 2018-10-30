import React from 'react';
import './Header.css';
import logo from '../img/logo-ween.png';

class Header extends React.Component {
    render() {
        return(
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            </div>
        )
    }
}

export default Header;