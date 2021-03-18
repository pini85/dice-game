import React from "react";
import "./game.styles.css";

import Player from "../Player/Player.component";

class Game extends React.Component {
  state = {
    pointsToWin: 0,
    dices: [null, null],
    playersTurn: 1,
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
  render() {
    const renderPlayers = () => {
      return this.state.players.map((player, i) => {
        return (
          <React.Fragment key={i}>
            <Player
              playerData={player}
              player={i + 1}
              playersTurn={this.state.playersTurn}
            />
          </React.Fragment>
        );
      });
    };
    return <div className="game-container">{renderPlayers()}</div>;
  }
}
export default Game;
