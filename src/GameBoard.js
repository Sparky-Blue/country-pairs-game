import React, { Component } from "react";
import { countryData } from "./countryData";

export default class GameBoard extends Component {
  state = {
    countryData,
    cards: [],
    shuffCards: [],
    start: false,
    set: false
  };

  componentDidMount() {
    this.chooseCards();
  }
  render() {
    return (
      <div className="board">
        <div className="choice">
          <button onClick={this.chooseCards}>Get cards</button>
          <button onClick={this.resetCards}>Reset Game</button>
        </div>
        <div className="cards">
          {this.cardCaps()}
          {this.cardName()}
        </div>
      </div>
    );
  }
  resetCards = () => {
    const array = [];
    for (let n = 0; n < 16; n++) {
      array.push(<button className="blank" id={`cardBlank${n}`} key={n} />);
    }
    return <div className="cards">{array}</div>;
  };

  chooseCards = () => {
    const randomCountries = [];
    for (let n = 0; n < 8; n++) {
      randomCountries.push(
        this.state.countryData[
          Math.floor(Math.random() * this.state.countryData.length)
        ]
      );
    }
    if (this.state.set === false) {
      let counter = randomCountries.length;
      let shuffledCards = [...randomCountries];
      while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = shuffledCards[counter];
        shuffledCards[counter] = shuffledCards[index];
        shuffledCards[index] = temp;
      }
      this.setState({
        cards: [...randomCountries],
        start: true,
        shuffCards: [...shuffledCards],
        set: true
      });
    } else {
      this.setState({
        cards: [...randomCountries],
        start: true,
        set: true
      });
    }
  };

  cardCaps = () => {
    return this.state.cards.map((card, i) => {
      return (
        <button
          className="cardCap"
          onClick={this.props.selectCard}
          id={`card${i}`}
          key={i}
          value={card.CountryName}
          disabled={false}
        >
          {card.CapitalName}
        </button>
      );
    });
  };

  cardName = () => {
    console.log(this.props.tracker.country);
    return this.state.cards.map((card, i) => {
      console.log(card.CapitalName);
      return (
        <button
          className={
            card.CapitalName === this.props.tracker.pair
              ? "cardName correct"
              : "cardName"
          }
          onClick={this.props.selectCard}
          id={`cardName${i}`}
          key={i}
          value={card.CapitalName}
          disabled={false}
        >
          {card.CountryName}
        </button>
      );
    });
  };
}
