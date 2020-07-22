import React from "react";
import "./style.css";

function ImageCard(props) {
    return (
        <div>
        <div className="card"  onClick = {()=> {
            props.handleClick(props.id)
        }}>
            <div className="img-container">
                <img id= "imgCard" alt="test" src={props.image}  />
            </div>
            
           
        </div>
        <br />
        </div>
    );
}

export default ImageCard;