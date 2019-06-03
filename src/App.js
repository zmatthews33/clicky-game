import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";

import simpsonsList from "./simpsons.json";

class App extends React.Component {
  state = {
    simpsonsArr: simpsonsList,
    Score: 0,
    TopScore: 0
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

  handleClick = (event, id) => {
    event.preventDefault();
    console.log(id);
  };

  componentDidMount() {
    const newSimpsonsArr = this.shuffleArr(this.state.simpsonsArr);
    this.setState({
      simpsonsArr: newSimpsonsArr
    });
  }
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

