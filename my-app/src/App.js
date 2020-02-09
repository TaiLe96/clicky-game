import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import images from "./images.json"

// function App() {
//   return(
//     <div className="App">
//       <Header/>
//       <Navbar/>
//       <Card/>
//     </div>
//   )
// }

class App extends Component {
  state = {
    images,
    score: 0,
    highScore: 0,
    clicked: [],
    text: ""
  }

  clickMe = id => {
    if (this.state.clicked.includes(id)) {
      this.setState({ text: "Ehh, you pick the picture twice." })
      if (this.state.highScore < this.state.score) {
        this.setState({ highScore: this.state.score })
      };
      this.setState({ clicked: [] })
      this.setState({ score: 0 })
    }
    else {
      this.setState({ text: "Here we go!" })
      this.setState({ score: this.state.score + 1 })
      this.setSteate({ click: [this.state.clicked, id] })
    }

  }

  render() {
    return (
      <div>
        <Navbar
          text={this.state.text}
          score={this.state.score}
          highScore={this.state.highScore} />
        <div className="jumbotron text-center">
          <h1>Bachelor Clicky Game</h1>
          <p>Click on image for 1 point but be careful and don't click on one more than once!</p>
          <Wrapper>
            {this.state.images.map(image => (
              <Card
                id={image.id}
                key={image.id}
                image={image.image}
                clickMe={this.clickMe}
              />
            ))}
          </Wrapper>
        </div>
      </div>




    )
  }




}

export default App;
