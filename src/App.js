import React from "react";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper/Wrapper";
import "./App.css";

import simpsons from "./simpsons.json";

/*class App extends React.Component {
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

export default App;*/

class App extends React.Component {
  // Setting this.state.simpsons to the simpsons json array
  state = {
    simpsons
  };

  removeSimpson = id => {
    // Filter this.state.simpsons for simpsons with an id not equal to the id being removed
    const simpsons = this.state.simpsons.filter(simpson => simpson.id !== id);
    // Set this.state.simpsons equal to the new simpsons array
    this.setState({ simpsons });
  };

  // Map over this.state.simpsons and render a simpsonCard component for each simpson object
  render() {
    return (
      <Wrapper>
        <Header>Simpsons</Header>
        {this.state.simpsons.map(simpson => (
          <Card
            removeSimpson={this.removeSimpson}
            id={simpson.id}
            key={simpson.id}
            name={simpson.name}
            image={simpson.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
