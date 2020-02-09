import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return(
    <div className="App">
      <Header/>
      <Navbar/>
      <Card/>
    </div>
  )
}

class App extends Component {
  state = {
    image,
    score: 0,
    highScore: 0,
    clicked: [],
    text: ""
  }

chooseOne = id => {
  if (this.state.clicked.includes(id)){
    this.setState({text: "Ehh, you pick the picture twice!!"})
    if(this.state.highScore < this.state.score){
      
    }
  }
}
}

export default App;
