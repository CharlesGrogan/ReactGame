import React, { Component } from "react";
import "./App.css";
import cryptos from "./cryptos.json";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Title from "./components/Title";
import CryptoCard from "./components/CryptoCard";

class App extends Component {
  state = {
    message: "Click a photo to begin!",
    topScore: 0,
    curScore: 0,
    cryptos: cryptos,
    unselectedCryptos: cryptos
  };

  componentDidMount() {}

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  selectCrypto = name => {
    const findCrypto = this.state.unselectedCryptos.find(
      item => item.name === name
    );

    if (findCrypto === undefined) {
      // failure to select a new crypto
      this.setState({
        message: "You guessed wrong!",
        topScore:
          this.state.curScore > this.state.topScore
            ? this.state.curScore
            : this.state.topScore,
        curScore: 0,
        cryptos: cryptos,
        unselectedCryptos: cryptos
      });
    } else {
      // success to select a new crypto
      const newCryptos = this.state.unselectedCryptos.filter(
        item => item.name !== name
      );

      this.setState({
        message: "You guessed right!",
        curScore: this.state.curScore + 1,
        cryptos: cryptos,
        unselectedCryptos: newCryptos
      });
    }

    this.shuffleArray(cryptos);
  };

  render() {
    return (
      <Wrapper>
        <Header
          message={this.state.message}
          curScore={this.state.curScore}
          topScore={this.state.topScore}
        />
        <Title />
        {this.state.cryptos.map(crypto => (
          <CryptoCard
            name={crypto.name}
            image={crypto.image}
            selectCrypto={this.selectCrypto}
            curScore={this.state.curScore}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
