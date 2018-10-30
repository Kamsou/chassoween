import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Niveau from './Components/Niveau';
import { Route, Switch, Link } from 'react-router-dom';
import Page2 from './Components/page2';
import Inputbutton from './Components/inputbutton';

import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <div className="black">
        <Header />
        <Niveau />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page2">Page2</Link>
            </li>
          </ul>

          <Switch>

            <Route exact path="/" component={Home}/>
            <Route exact path="/page2" component={Page2} />

          </Switch>

{/* CONSIGNES POUR LES NOOBS */}


{/* CHAMP INPUT */}

       
      </div>
    );
  }
}

export default App;
