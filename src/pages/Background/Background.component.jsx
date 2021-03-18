import "./background.styles.css";
const Background = (props) => {
  console.log(props.children);
  return <div className="background">hi{props.children}</div>;
};
export default Background;
