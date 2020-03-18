import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css"

function Navigation(){
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/message">Message</Link>
            <Link to="/maskmap">MaskMap</Link>
            <Link to="/googlemap">GoogleMap</Link>
        </div>
    );
}

export default Navigation;