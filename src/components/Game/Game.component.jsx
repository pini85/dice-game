import React from "react";
import "./game.styles.css";

import Player from "../Player/Player.component";
import OptionsContainer from "../OptionsContainer/OptionsContainer.component";
import Dice from "../Dice/Dice.component";

class Game extends React.Component {
  state = {
    pointsToWin: 100,
    dices: [null, null],
    playersTurn: 0,
    winner: false,
    players: [
      {
        currentScore: 0,
        globalScore: 0,
        wins: 0,
      },
      {
        currentScore: 0,
        globalScore: 0,
        wins: 0,
      },
    ],
  };

  handleDices = () => {
    const diceValues = this.state.dices.map((die) => {
      return Math.floor(Math.random() * 6) + 1;
    });

    const players = [...this.state.players];
    players[this.state.playersTurn].currentScore += diceValues.reduce(
      (val, acc) => val + acc
    );

    const doubles = diceValues.every((die) => die === diceValues[0]);
    if (doubles) {
      players[this.state.playersTurn].currentScore = 0;
      const nextPlayer =
        this.state.playersTurn === this.state.players.length - 1
          ? 0
          : this.state.playersTurn + 1;

      return this.setState({
        playersTurn: nextPlayer,
        dices: [null, null],
      });
    }

    this.setState({ dices: [...diceValues], players });
  };

  handleHold = () => {
    const players = [...this.state.players];

    players[this.state.playersTurn].globalScore +=
      players[this.state.playersTurn].currentScore;

    players[this.state.playersTurn].currentScore = 0;

    const nextPlayer =
      this.state.playersTurn === this.state.players.length - 1
        ? 0
        : this.state.playersTurn + 1;

    if (players[this.state.playersTurn].globalScore >= this.state.pointsToWin) {
      return this.setState({ players, winner: true, dices: [null, null] });
    }
    this.setState({ players, playersTurn: nextPlayer, dices: [null, null] });
  };

  handleNewGame = () => {
    this.setState({
      dices: [null, null],
      playersTurn: 0,
      winner: false,
      players: [
        {
          currentScore: 0,
          globalScore: 0,
          wins: 0,
        },
        {
          currentScore: 0,
          globalScore: 0,
          wins: 0,
        },
      ],
    });
  };

  handlePointsToWin = (values) => {
    this.setState({ pointsToWin: values });
  };

  render() {
    const renderPlayers = () => {
      return this.state.players.map((player, i) => {
        return (
          <React.Fragment key={i}>
            <Player
              playerData={player}
              player={i}
              playersTurn={this.state.playersTurn}
              winner={this.state.winner}
            />
          </React.Fragment>
        );
      });
    };

    return (
      <div className="game-container">
        {renderPlayers()}
        <OptionsContainer
          handlePointsToWin={this.handlePointsToWin}
          handleDices={this.handleDices}
          handleHold={this.handleHold}
          handleNewGame={this.handleNewGame}
          winner={this.state.winner}
        />
        <Dice dices={this.state.dices} />
      </div>
    );
  }
}
export default Game;
