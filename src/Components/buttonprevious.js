import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./buttonprevious.css";
import left from "./icon/arrow-alt-circle-left-regular.svg";

class Buttonprevious extends Component {
    render() {
        return (
            <div className="buttonprevious_div">
                <button> <Link to="/"> <img className="icon_previous" src={left} alt="" /></Link> </button>
            </div>


        );

    }
}
export default Buttonprevious;