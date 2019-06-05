import React from "react";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import "./App.css";

import simpsonsList from "./simpsons.json";

class App extends React.Component {
  state = {
    simpsonsArr: simpsonsList,
    previewsClick: "",
    score: 0,
    topScore: 0,
    isPlaying: false,
    wrongClick: false,
    message: "Click on a character to start!"
  };
  shuffleArr = arr => {
    let newPosition, temp;
    for (let i = arr.length - 1; i > 0; i--) {
      newPosition = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[newPosition];
      arr[newPosition] = temp;
    }
    return arr;
  };

  componentDidMount() {
    const newSimpsonsArr = this.shuffleArr(this.state.simpsonsArr);
    this.setState({
      simpsonsArr: newSimpsonsArr
    });
  }

  handleClick = event => {
    event.preventDefault();
    this.setState({
      isPlaying: true,
      message: "Now Playing"
    });

    const { alt } = event.target;

    const currentClick = alt;

    if (currentClick !== this.state.previewsClick) {
      const newSimpsonsArr = this.shuffleArr(this.state.simpsonsArr);
      this.setState({
        simpsonsArr: newSimpsonsArr,
        previewsClick: currentClick,
        score: this.state.score + 1,
        wrongClick: false
      });
    } else {
      // saving current score on a variable
      const saveScore = this.state.score;
      const newSimpsonsArr = this.shuffleArr(this.state.SimpsonsArr);

      if (saveScore > this.state.topScore) {
        this.setState({
          simpsonsArr: newSimpsonsArr,
          previewsClick: currentClick,
          score: 0,
          topScore: saveScore,
          wrongClick: true,
          message: "Doh!"
        });
      }
      // else just reset the current score and keep playing the game
      this.setState({
        simpsonsArr: newSimpsonsArr,
        previewsClick: currentClick,
        score: 0,
        wrongClick: true,
        message: "Doh!"
      });
    }
  };

  render() {
    return [
      <Header />,

      <main>
        <Card simpsons={this.state.simpsonsArr} />
      </main>
    ];
  }
}

export default App;
