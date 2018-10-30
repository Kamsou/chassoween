import React, { Component } from 'react'
import './App.css'
import Maps from "./components/Maps";
import { Route, Switch } from 'react-router-dom';



class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="bgimg">
     
       

            

        <Switch>
          <Route exact path="/map/:adresse" component={Maps}/>
        </Switch>
        </div>
        
      </div>
      
    );
  }
}


export default App;
