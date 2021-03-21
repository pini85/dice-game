import "./player.styles.css";
import CurrentScore from "../CurrentScore/CurrentScore.component";
import GlobalScore from "../GlobalScore/GlobalScore.component";
const Player = ({
  playerData: { currentScore, globalScore, wins },
  player,
  playersTurn,
  winner,
  ...props
}) => {
  const activeStyle = player === playersTurn ? "active" : "";
  const playerName =
    player === playersTurn && winner ? "WINNER!!!" : `player ${player + 1}`;
  return (
    <div className={`player-container ${activeStyle}`}>
      <div className={`player-name ${activeStyle}`}>{playerName} </div>
      <GlobalScore score={globalScore} />
      <CurrentScore score={currentScore} />
    </div>
  );
};
export default Player;
