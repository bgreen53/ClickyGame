import React, { Component } from "react";
import "./style.css";


function ImageCard(props) {
    return (
        <div className="card"  onClick = {()=> {
            props.handleClick(props.id)
        }}>
            <div className="img-container">
                <img class="img-card-top" id="imgCard" alt="test" src={props.image}  />
            </div>
            
           
        </div>
    );
}

export default ImageCard;