import React from "react";

function Card(props){
    return(
        <div className="row">
            <div>
                <div>
                    <img src={props.image} alt={props.id} onClick={() => props.clickMe(props.id)}/>
                </div>
            </div>
        </div>
    )
}

export default Card;