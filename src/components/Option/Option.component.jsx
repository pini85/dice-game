import "./option.styles.css";
const Option = ({ title, icon, handleCallBack, winner, doNotDisable }) => {
  return (
    <button
      disabled={doNotDisable ? false : winner}
      onClick={handleCallBack}
      className="option-container"
    >
      <span className="material-icons">{icon}</span>
      {title}
    </button>
  );
};
export default Option;
