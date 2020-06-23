import React, { Component } from "react";
import "./style.css";
import images from "./images.json";

class ImageCard extends Component {
    constructor(props) {
      super(props)
      this.state = {
        images: images,
        score: 0,
        topScore: 0
  
      }
    }

handleClick = id => {
    let newCard = this.state.images.map(image => {
      if (id === image.id) {
        if (image.clicked === undefined) {
          this.setState({
            score: this.state.score + 1
          })

          image.clicked = true;
          if (this.state.score >= this.state.topScore) {
            this.setState({
              topScore: this.state.topScore + 1
            })
          }
        }
        else {
          this.setState({
            score: 0
          })
        }

      }


      return image;
    })
    newCard = newCard.sort(() => (
      Math.random() - 1
    ))
    if (this.state.score === 0) {
      newCard = newCard.map(image => {
        image.clicked = undefined
        return image
      })
    }


    this.setState({
      images: newCard
    })
  }

render() {
    return (

     

        <div className="card"  onClick = {()=> {
            props.handleClick(props.id)
        }}>
            
       <img class="card-img-top" id="imgCard" alt="test" src={props.image}  />
            
            
           
        </div>

          
    );
}
}

export default ImageCard;