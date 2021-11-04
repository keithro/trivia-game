import { Link } from "react-router-dom";

import Nav from './Nav';

const Results = (props) => {
  console.log(props);
  
  const {counter, score, correctCount} = props;

  return (
    <div>
      <Nav />
      <section>
        <h4>
          You got {correctCount} correct out of {counter} for a total of
        </h4>
        <h1>{score}</h1>
        <h2>points!</h2>
        <Link to="/">Play Again!</Link>
      </section>
    </div>
  );
}

export default Results;
