import "./option.styles.css";
const Option = ({ title, icon, handleCallBack, winner, doNotDisable }) => {
  console.log(handleCallBack);

  console.log(winner);
  return (
    <button
      disabled={doNotDisable ? false : winner}
      onClick={() => handleCallBack(title)}
      className="option-container"
    >
      <span className="material-icons">{icon}</span>
      {title}
    </button>
  );
};
export default Option;
