import "./current-score.styles.css";
const CurrentScore = ({ score }) => {
  return (
    <div className="current-score-container">
      <div className="current-score-label">Current</div>
      <div className="current-score"> {score}</div>
    </div>
  );
};

export default CurrentScore;
