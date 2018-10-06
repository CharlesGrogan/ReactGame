import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/jumbotron";
import crypto from "./crypto.json";
// import './App.css';

class App extends Component {
  state = {
    crypto,
    clickedItems: []
  };

  shuffleFriend = data => {
    const id = data;
    for (let i = 0; i < id.length; i++) {
      // loop over array
      const friends = Math.floor(Math.random() * id.length); // make a random number each time
      const temp = id[i]; // store value at index i
      id[i] = id[friends]; // swaps value at index i with random index in array
      id[friends] = temp; // replaces value we swapped wiht the original index value
    }
    this.setState({ crypto: id });
  };

  guessedRight = id => {
    if (this.state.clickedItems.includes(id)) {
      this.setState({ crypto, clickedItems: [] });
    } else {
      this.shuffleFriend(this.state.crypto);
      const guess = [...this.state.clickedItems, id];
      this.setState({ clickedItems: guess });
    }
  };

  render() {
    return (
      <div>
        <Jumbotron />{" "}
        {this.state.crypto.map(item => (
          <FriendCard
            key={item.id}
            id={item.id}
            name={item.name}
            img={item.img}
            guess={this.guessedRight}
          />
        ))}
      </div>
    );
  }
}

export default App;
