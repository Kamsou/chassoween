import React, { Component } from 'react';
import "./page2.css";
import Buttonprevious from './buttonprevious';
import Inputbutton from './inputbutton';
class Page2 extends Component {
    render() {
        return (
            <div className="page2_div">
                <div className="titrepage2">
                    <Buttonprevious />
                    <h2>Trouve le code!</h2>
                </div>
                {/* IMAGE RANDOM DE NICO */}


                {/* CHAMP INPUT DE MATMAT92*/}
                <div className="matmat92wesh">
                <Inputbutton />
                </div>

            </div>
        );

    }
}
export default Page2;