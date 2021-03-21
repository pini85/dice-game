import "./dice.styles.css";
const Dice = ({ dices }) => {
  const renderDices = () => {
    if (dices[0]) {
      const value = dices.map((die) => {
        return (
          <img
            src={require(`../../assets/images/dice-${die}.png`).default}
            alt="die"
          />
        );
      });
      return value;
    }
  };

  return <div className="dice-container"> {renderDices()}</div>;
};
export default Dice;
