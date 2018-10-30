import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Page2 from './Components/page2';
import Header from './Components/header';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page2">Page2</Link>
            </li>
          </ul>

          <Switch>

            <Route exact path="/"/>
            <Route exact path="/page2" component={Page2} />

          </Switch>

{/* CONSIGNES POUR LES NOOBS */}


{/* CHAMP INPUT */}

       
      </div>
    );
  }
}

export default App;
