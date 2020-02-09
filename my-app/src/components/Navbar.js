import React from "react";
import "../styles/navbar.css"

function Navbar(props){
    return(
        <div>
            <nav className="navbar fixed-top">
                <h3>Score: {props.score} | Top Score: {props.highScore}</h3>
                <h3>{props.text}</h3>
            </nav>
        </div>
    )
}

export default Navbar