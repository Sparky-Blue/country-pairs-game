import React, { Component } from "react";
import "./App.css";
import GameBoard from "./GameBoard";

class App extends Component {
  state = {
    tracker: {
      pick: "",
      pair: "",
      cardCount: 0,
      country: "",
      match: false,
      chosenCards: [],
      right: [],
      wrong: []
    },
    score: { points: 0, pairsFound: 0, mistakes: 0 }
  };

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <header>Country Matching game</header>
          <div className="gamePlay">
            <GameBoard
              selectCard={this.selectCard}
              tracker={this.state.tracker}
            />
          </div>
          <Scores scores={this.state.score} />
        </div>
      </div>
    );
  }

  selectCard = event => {
    const { points, mistakes, pairsFound } = this.state.score;
    if (this.state.count === 8) {
      //next Level?
    } else {
      event.target.className = `${event.target.className} selected`;
      event.target.disabled = true;
      if (this.state.tracker.pair !== "") {
        if (this.state.tracker.pair === event.target.innerText) {
          this.setState({
            tracker: {
              pick: "",
              pair: "",
              cardCount: 0,
              country: this.state.tracker.country,
              match: true
            },
            score: {
              points: points + 1,
              pairsFound: pairsFound + 1,
              mistakes: this.state.score.mistakes
            }
          });
        } else {
          this.setState({
            score: {
              points: points,
              pairsFound: pairsFound,
              mistakes: mistakes + 1
            },
            tracker: {
              pick: "",
              pair: "",
              cardCount: 0,
              country: "",
              match: true
            }
          });
        }
      } else {
        const pair = event.target.value;
        this.setState({
          tracker: {
            pick: event.target.innerText,
            pair,
            country: event.target.value,
            cardCount: +this.state.cardCount + 1,
            match: false
          }
        });
      }
    }
  };
}

class Scores extends Component {
  render() {
    return (
      <div className="scoreboard">
        <div className="currentScore">
          current Scores: pairs found {this.props.scores.pairsFound} mistakes:
          {this.props.scores.mistakes}
        </div>
        <div className="topScores"> top scores</div>
      </div>
    );
  }
}

export default App;
