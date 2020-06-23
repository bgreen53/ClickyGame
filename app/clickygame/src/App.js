import React, { Component } from "react";
import './App.css';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";




   

  function App(){
    return (
      <Wrapper>
        <Title>Clicky Game | Score: {this.state.score} | TopScore: {this.state.topScore} </Title>
       <ImageCard />

      </Wrapper>
    )
  }




export default App;
