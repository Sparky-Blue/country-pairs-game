import React, { Component } from "react";
import "./App.css";
import GameBoard from "./GameBoard";
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
    score: { points: 0, pairsFound: 0, mistakes: 0, level: 1 },
    newLevel: null,
    newGame: false
  };

  componentDidMount() {
    this.chooseNewCards();
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <header>Country Matching game</header>
          <i className="em em-world_map" />
          <div className="gamePlay">
            <button className="topButtons" onClick={this.resetGame}>
              Reset Game
            </button>
            <button
              className="topButtons"
              onClick={this.nextLevel}
              hidden={this.state.newLevel === null ? true : false}
            >
              Next Level
            </button>
            <div className="board">
              <button className="topButtons" onClick={this.chooseCards}>
                New cards
              </button>
              <div className="cards">
                {this.cardCaps()}
                {this.cardName()}
              </div>
            </div>
            {/* <GameBoard
              selectCard={this.selectCard}
              tracker={this.state.tracker}
              reset={this.resetGame}
              newLevel={this.state.newLevel}
              newGame={this.state.newGame}
            /> */}
          </div>
          <Scores scores={this.state.score} />
          <i className="em em-earth_africa" />
        </div>
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
        cards: [...randomCountries],
        newGame: true,
        shuffCards: [...shuffledCards],
        countryData
      }
    });
  };

  cardCaps = () => {
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
          className={`cardCap ${classAnswer}`}
          onClick={this.selectCard}
          id={`card${i}`}
          key={i}
          value={card.CountryCode}
          disabled={disabled}
        >
          {card.CapitalName}
          <br />
          {classAnswer !== "" && (
            <i className={`em-svg em-flag-${card.CountryCode.toLowerCase()}`} />
          )}
        </button>
      );
    });
  };

  cardName = () => {
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
          id={`cardName${i}`}
          key={i}
          value={card.CountryCode}
          disabled={disabled}
        >
          {card.CountryName}
          <br />
          {classAnswer !== "" && (
            <i className={`em-svg em-flag-${card.CountryCode.toLowerCase()}`} />
          )}
        </button>
      );
    });
  };

  selectCard = event => {
    const { points, mistakes, pairsFound, level } = this.state.score;
    const { pair, cardCount, country, right, wrong } = this.state.tracker;

    console.log({ points, level });
    console.log(cardCount);
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
        },
        newLevel: null,
        newGame: null
      });
    }
  };

  checkAnswer = event => {
    const { points, mistakes, pairsFound, level } = this.state.score;
    const { pair, cardCount, country, right, wrong } = this.state.tracker;
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
      this.setState({
        score: {
          points: points,
          pairsFound: pairsFound,
          mistakes: mistakes + 1,
          level
        },
        tracker: {
          wrong: [...wrong, event.target.value, country],
          pair: false,
          cardCount: +cardCount + 4,
          country: "",
          right
        }
      });
    }
    if (this.state.tracker.cardCount >= 12) {
      this.setState({ newLevel: true });
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
        shuffCards: [],
        newGame: false
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
      },
      newLevel: true,
      newGame: null
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
      score: { points: 0, pairsFound: 0, mistakes: 0, level: 1 },
      newGame: null,
      newLevel: null
    });
  };
}

class Scores extends Component {
  render() {
    const { points, pairsFound, mistakes, level } = this.props.scores;
    return (
      <div className="scoreboard">
        <div className="level">Level: {level}</div>
        <div className="currentScore">Total score: {points}</div>
        <div className="thisGame">
          This level: <br />
          <div className="pairs">Pairs found: {pairsFound}</div>
          <div className="mismatched">Mismatched pairs: {mistakes}</div>
        </div>
      </div>
    );
  }
}

export default App;
