import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import images from "./images.json"


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
      this.setState({ text: "Ehh, you picked the picture twice." })
      if (this.state.highScore < this.state.score) {
        this.setState({ highScore: this.state.score })
      };
      this.setState({clicked: []})
      this.setState({score: 0})
    }
    else {
      this.setState({text: "Here we go!" })
      this.setState({score: this.state.score + 1 })
      this.setState({clicked: [this.state.clicked, id] })
    }
    const newClick = this.state.images
    this.shuffleImages(newClick)
  };

  shuffleImages = newClick => {
    for (var i = newClick.length -1; i>0; i--){
      const j = Math.floor(Math.random() * (i+1))
      const shuffle = newClick[i];
      newClick[i] = newClick[j];
      newClick[j] = shuffle
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
          <Header/>
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
