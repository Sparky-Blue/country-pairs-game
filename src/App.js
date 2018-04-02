import React, { Component } from "react";
import "./App.css";
import { countryData } from "./countryData";

class App extends Component {
  state = {
    cards: {
      usedCards: [],
      countryData,
      cards: [],
      shuffCards: []
    },
    tracker: {
      pair: false,
      cardCount: 0,
      country: "",
      right: [],
      wrong: []
    },
    score: { points: 0, pairsFound: 0, mistakes: 0, level: 1 }
  };

  componentDidMount() {
    this.chooseNewCards();
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <header>
            <h1>Match the country with the capital...</h1>
          </header>
          <i className="em em-world_map" />
          <div className="gamePlay">
            <button className="topButtons reset" onClick={this.resetGame}>
              Reset Game
            </button>
            <button
              className="topButtons level"
              onClick={this.nextLevel}
              hidden={this.state.tracker.cardCount >= 16 ? false : true}
            >
              Next Level
            </button>
            <div className="board">
              <div className="cards">{this.setCards()}</div>
            </div>
          </div>
          <Scores scores={this.state.score} />
          <i className="em em-earth_africa" />
        </div>
        <footer />
      </div>
    );
  }

  chooseNewCards = () => {
    const { countryData, usedCards } = this.state.cards;
    const randomCountries = [];
    for (let n = 0; n < 8; n++) {
      const card = countryData[Math.floor(Math.random() * countryData.length)];
      if (usedCards.includes(card) || randomCountries.includes(card)) --n;
      else randomCountries.push(card);
    }
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
      cards: {
        usedCards: [...usedCards],
        cards: [...randomCountries, ...shuffledCards],
        countryData
      }
    });
  };

  setCards = () => {
    return this.state.cards.cards.map((card, i) => {
      let classAnswer = "";
      let disabled = null;
      if (this.state.tracker.right.includes(card.CountryCode)) {
        classAnswer = "correct";
        disabled = true;
      }
      if (this.state.tracker.wrong.includes(card.CountryCode)) {
        classAnswer = "wrong";
        disabled = true;
      }
      return (
        <button
          className={`cardName ${classAnswer}`}
          onClick={this.selectCard}
          id={`card${i}`}
          key={i}
          value={card.CountryCode}
          disabled={disabled}
        >
          {i > 7 ? card.CapitalName : card.CountryName}
          <br />
          {classAnswer !== "" && (
            <i className={`em-svg em-flag-${card.CountryCode.toLowerCase()}`} />
          )}
        </button>
      );
    });
  };

  selectCard = event => {
    const { pair, cardCount, right, wrong } = this.state.tracker;
    event.target.className = `${event.target.className} selected`;
    event.target.disabled = true;
    if (pair === true) {
      this.checkAnswer(event);
    } else {
      this.setState({
        tracker: {
          pair: true,
          country: event.target.value,
          cardCount,
          right,
          wrong
        }
      });
    }
  };

  checkAnswer = event => {
    const { points, mistakes, pairsFound, level } = this.state.score;
    const { cardCount, country, right, wrong } = this.state.tracker;
    if (country === event.target.value) {
      this.setState({
        tracker: {
          pair: false,
          cardCount: +cardCount + 2,
          country: country,
          right: [...right, event.target.value],
          wrong
        },
        score: {
          points: points + 1,
          pairsFound: pairsFound + 1,
          mistakes: mistakes,
          level
        }
      });
    } else {
      event.target.className = `cardName`;
      event.target.disabled = false;
      this.setState({
        score: {
          points: points,
          pairsFound: pairsFound,
          mistakes: mistakes + 1,
          level
        },
        tracker: {
          wrong: [...wrong, country],
          pair: false,
          cardCount: +cardCount + 2,
          country: "",
          right
        }
      });
    }
  };

  nextLevel = () => {
    const { usedCards, cards, countryData } = this.state.cards;
    const { points, level } = this.state.score;
    this.setState({
      cards: {
        usedCards: [...usedCards, ...cards],
        countryData,
        cards: [],
        shuffCards: []
      },
      score: {
        points,
        mistakes: 0,
        pairsFound: 0,
        level: +level + 1
      },
      tracker: {
        pair: false,
        cardCount: 0,
        country: "",
        right: [],
        wrong: []
      }
    });

    this.chooseNewCards();
  };

  resetGame = () => {
    this.setState({
      cards: {
        usedCards: [],
        countryData,
        cards: [],
        shuffCards: []
      },
      tracker: {
        pair: false,
        cardCount: 0,
        country: "",
        right: [],
        wrong: []
      },
      score: { points: 0, pairsFound: 0, mistakes: 0, level: 1 }
    });
    this.chooseNewCards();
  };
}

class Scores extends Component {
  state = {
    username: ""
  };
  render() {
    const { points, pairsFound, mistakes, level } = this.props.scores;
    return (
      <div className="scoreboard">
        <div className="level">
          <h3>Level: {level}</h3>
        </div>
        <div className="currentScore">
          <h3>Total score: {points}</h3>
        </div>
        <div className="thisGame">
          <h3>This level</h3>
          <div className="pairs">
            <p>Pairs found: {pairsFound}</p>
          </div>
          <div className="mismatched">
            <p>Mismatched pairs: {mistakes}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
