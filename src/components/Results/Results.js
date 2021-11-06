import { Link } from "react-router-dom";
import Nav from '../Nav/Nav';
import "./Results.css";

const Results = (props) => {
  const {counter, score, correctCount} = props;

  // CONFETTI?
  // create confetti divs of random colors (chosen from array)
  // position at top: 0, right: width * Math.random()
  // animate with random delay distance of window height

  return (
    <div className="results">
      <Nav />
      <section className="results-container">
        <h4>
          You got <span className="display-correct">{correctCount}</span>{" "}
          correct out of <span className="display-count">{counter}</span> for a total of
        </h4>
        <h1 className="display-score">{score}</h1>
        <h2>points!</h2>
        <Link to="/" className="play-again-btn">Play Again!</Link>
      </section>
    </div>
  );
}

export default Results;
