import React, { Component } from "react";
import "./App.css";
import GameBoard from "./GameBoard";

class App extends Component {
  state = {
    tracker: { pick: "", pair: "" },
    score: { points: 0 }
  };

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <header>Country Matching game</header>
          <div className="gamePlay">
            <GameBoard selectCard={this.selectCard} />
          </div>
          <Scores />
        </div>
      </div>
    );
  }

  selectCard = event => {
    event.target.className = `${event.target.className} selected`;
    event.target.disabled = true;
    if (this.state.tracker.pair !== "") {
      if (this.state.tracker.pair === event.target.innerText) {
        console.log("correct");
        event.target.className = `${event.target.className} correct`;
      } else {
        event.target.className = `${event.target.className} wrong`;
        console.log("wrong!");
      }

      this.setState({
        tracker: {
          pick: "",
          pair: ""
        }
      });
    } else {
      const pair = event.target.value;
      event.target.style = "";
      this.setState({
        tracker: {
          pick: event.target.innerText,
          pair
        }
      });
    }
  };
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
