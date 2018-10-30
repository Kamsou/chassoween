import React, { Component } from 'react';
import "./buttonprevious.css";
import left from "./icon/arrow-alt-circle-left-regular.svg";

class Buttonprevious extends Component {
    render() {
        return (
            <div className="buttonprevious_div">
                <button className="buttonprevious"> <a href="/"> <img className="icon_previous" src={left} alt="" /></a> </button>
            </div>


        );

    }
}
export default Buttonprevious;