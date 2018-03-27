import React, { Component } from "react";
import "./App.css";
import { countryData } from "./countryData";

class App extends Component {
  state = {
    countryData: countryData
  };
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <header>Country Matching game</header>
          <div className="gamePlay">
            <GameBoard countries={this.state.countryData} />
          </div>
          <Scores />
        </div>
      </div>
    );
  }
}

class GameBoard extends Component {
  state = {
    cards: [],
    shuffCards: [],
    start: false,
    set: false
  };
  render() {
    return (
      <div className="board">
        <div className="choice">
          <button onClick={this.chooseCards}>Get cards</button>
        </div>
        {this.state.start === true ? (
          <Cards cardSelection={this.state} />
        ) : (
          <Start />
        )}
      </div>
    );
  }

  chooseCards = () => {
    const randomCountries = [];

    for (let n = 0; n < 8; n++) {
      randomCountries.push(
        this.props.countries[
          Math.floor(Math.random() * this.props.countries.length)
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
        shuffCards: this.state.shuffCards,
        set: true
      });
    }
  };
}

function Start() {
  const array = [];
  for (let n = 0; n < 16; n++) {
    array.push(
      <button className="blank" id={`cardBlank${n}`} key={n}>
        Placeholder
      </button>
    );
  }
  return <div className="cards">{array}</div>;
}

class Cards extends Component {
  state = {
    tracker: { country: "", capital: "", pair: false },
    set: false
  };
  render() {
    return (
      <div className="cards">
        <CardName
          cards={this.props.cardSelection.cards}
          country={this.selectCountry}
        />
        <CardCaps
          cards={this.props.cardSelection.cards}
          capital={this.selectCapital}
          shuffled={this.props.cardSelection.shuffCards}
        />
      </div>
    );
  }
  selectCountry = event => {
    event.target.style = "background: blue";
    if (this.state.tracker.pair === true) {
      const country = this.props.cardSelection.cards.filter(card => {
        return event.target.innerText === card.CountryName;
      });
      if (country[0].CapitalName === this.state.tracker.capital) {
        console.log("correct");
      } else {
        event.target.style = "";
        console.log("wrong!");
      }
      this.setState({
        tracker: {
          country: "",
          capital: "",
          pair: false
        }
      });
    } else {
      event.target.style = "";
      this.setState({
        tracker: {
          country: event.target.innerText,
          capital: "",
          pair: true
        }
      });
    }
  };

  selectCapital = event => {
    event.target.style = "background: green";
    if (this.state.tracker.pair === true) {
      let country;
      this.props.cardSelection.cards.forEach(card => {
        if (event.target.innerText === card.CapitalName) country = card;
      });
      if (country.CountryName === this.state.tracker.country) {
        console.log("correct");
      } else {
        event.target.style = "";
        console.log("wrong!");
      }
      this.setState({
        tracker: {
          country: "",
          capital: "",
          pair: false
        }
      });
    } else {
      this.setState({
        tracker: {
          capital: event.target.innerText,
          country: "",
          pair: true
        }
      });
    }
  };
}

function CardCaps({ cards, capital }) {
  return cards.map((card, i) => {
    return (
      <button className="cardCap" onClick={capital} id={`card${i}`} key={i}>
        {card.CapitalName}
      </button>
    );
  });
}

function CardName({ cards, country }) {
  return cards.map((card, i) => {
    return (
      <button
        className="cardName"
        onClick={country}
        id={`cardName${i}`}
        key={i}
      >
        {card.CountryName}
      </button>
    );
  });
}

class Scores extends Component {
  render() {
    return (
      <div className="scoreboard">
        <div className="currentScore">current Scores </div>
        <div className="topScores"> top scores</div>
      </div>
    );
  }
}

export default App;
