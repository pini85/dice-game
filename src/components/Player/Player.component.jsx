import "./player.styles.css";
import CurrentScore from "../CurrentScore/CurrentScore.component";
import GlobalScore from "../GlobalScore/GlobalScore.component";
const Player = ({
  playerData: { currentScore, globalScore, wins },
  player,
  playersTurn,
  ...props
}) => {
  const activeStyle = player === playersTurn ? "active" : null;
  return (
    <div className={`player-container ${activeStyle}`}>
      <div className={`player-name ${activeStyle}`}> PLAYER {player}</div>
      <GlobalScore score={globalScore} />
      <CurrentScore score={currentScore} />
    </div>
  );
};
export default Player;
