// import React, { Component } from "react";
// import { countryData } from "./countryData";

// export default class GameBoard extends Component {
//   state = {
//     usedCards: [],
//     countryData,
//     cards: [],
//     shuffCards: [],
//     newGame: false
//   };

//   componentDidMount() {
//     this.chooseCards();
//   }

//   render() {
//     return (
//       <div className="board">
//         <button className="topButtons" onClick={this.chooseCards}>
//           New cards
//         </button>
//         <div className="cards">
//           {this.cardCaps}
//           {this.cardName}
//         </div>
//       </div>
//     );
//   }

//   resetCards = () => {
//     this.setState({
//       countryData,
//       cards: [],
//       shuffCards: [],
//       newGame: true
//     });
//     console.log("reset");
//     console.log(this.state);
//   };

//   nextLevel = () => {
//     console.log("here");
//     const { usedCards, cards } = this.state;
//     this.setState({
//       usedCards: [...usedCards, ...cards],
//       countryData,
//       cards: [],
//       shuffCards: [],
//       newGame: false
//     });
//     this.chooseCards();
//   };

//   chooseCards = () => {
//     // if (this.props.newGame === true) {
//     //   this.resetCards();
//     // }
//     console.log("now");
//     const randomCountries = [];
//     for (let n = 0; n < 8; n++) {
//       const card = this.state.countryData[
//         Math.floor(Math.random() * this.state.countryData.length)
//       ];
//       if (this.state.usedCards.includes(card) || randomCountries.includes(card))
//         --n;
//       else randomCountries.push(card);
//     }
//     let counter = randomCountries.length;
//     let shuffledCards = [...randomCountries];
//     while (counter > 0) {
//       let index = Math.floor(Math.random() * counter);
//       counter--;
//       let temp = shuffledCards[counter];
//       shuffledCards[counter] = shuffledCards[index];
//       shuffledCards[index] = temp;
//     }
//     this.setState({
//       usedCards: [...this.state.usedCards],
//       cards: [...randomCountries],
//       newGame: true,
//       shuffCards: [...shuffledCards]
//     });
//   };

//   cardCaps = () => {
//     if (this.props.newLevel === true) {
//       this.nextLevel();
//     }
//     return this.state.cards.map((card, i) => {
//       let classAnswer = "";
//       let disabled = null;
//       if (this.props.tracker.right.includes(card.CountryCode)) {
//         classAnswer = "correct";
//         disabled = true;
//       }
//       if (this.props.tracker.wrong.includes(card.CountryCode)) {
//         classAnswer = "wrong";
//         disabled = true;
//       }
//       return (
//         <button
//           className={`cardCap ${classAnswer}`}
//           onClick={this.props.selectCard}
//           id={`card${i}`}
//           key={i}
//           value={card.CountryCode}
//           disabled={disabled}
//         >
//           {card.CapitalName}
//           <br />
//           {classAnswer !== "" && (
//             <i className={`em-svg em-flag-${card.CountryCode.toLowerCase()}`} />
//           )}
//         </button>
//       );
//     });
//   };

//   cardName = () => {
//     return this.state.cards.map((card, i) => {
//       let classAnswer = "";
//       let disabled = null;
//       if (this.props.tracker.right.includes(card.CountryCode)) {
//         classAnswer = "correct";
//         disabled = true;
//       }
//       if (this.props.tracker.wrong.includes(card.CountryCode)) {
//         classAnswer = "wrong";
//         disabled = true;
//       }
//       return (
//         <button
//           className={`cardName ${classAnswer}`}
//           onClick={this.props.selectCard}
//           id={`cardName${i}`}
//           key={i}
//           value={card.CountryCode}
//           disabled={disabled}
//         >
//           {card.CountryName}
//           <br />
//           {classAnswer !== "" && (
//             <i className={`em-svg em-flag-${card.CountryCode.toLowerCase()}`} />
//           )}
//         </button>
//       );
//     });
//   };
// }

chooseNewCards = () => {
  const { countryData, usedCards } = this.state.cards;
  const randomCountries = [];
  for (let n = 0; n < 8; n++) {
    const card = countryData[Math.floor(Math.random() * countryData.length)];
    if (usedCards.includes(card) || randomCountries.includes(card)) --n;
    else randomCountries.push(card, card);
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
      cards: [...shuffledCards],
      countryData
    }
  });
};

cardCaps = () => {
  return this.state.cards.shuffCards.map((card, i) => {
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
        {i % 2 ? card.CapitalName : card.CountryName}
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
