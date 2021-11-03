import { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import Loader from './Loader';
import Question from './Question';

import "./Game.css";

const Game = (props) => {
  // STATES: counter, quizData, score, streak
  const [quizData, setQuizData] = useState(null);
  const [counter, setCount] = useState(0);
  const [score, setScore] = useState(0);

  const { quizCategory, quizDifficulty } = props.userPreferences;

  
  useEffect(() => {
    let url = "https://opentdb.com/api.php?amount=10";
    url += quizCategory && `&category=${quizCategory}`;
    url += quizDifficulty && `&difficulty=${quizDifficulty}`;
    
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuizData(data.results));
  }, []);

  // RENDERING COMPONENTS
  // If no quizData: render loader
  // If quizData: play game/render question 1
    // - "Loop" through array of questions:
    // - Start with question[0] 
      // - if (quizData[counter].question) {render question}
      // - Combine correct_answer and incorrect_answers into one array and shuffle answers
      // - render # of answers based on q.type (multi choice, true/false)
      // - wait for onClick event then:
        // - compare answer
        // - increment or decrement score based on q.difficulty
        // - increment counter (which will rerender page with q[2])
  // If(counter > quizData.length)
    // - When done, display final score and results (# correct out of arr.length or counter)

    // FIXME: This should prob be: quizData.length > counter ?
  // const questionJSX = quizData[counter] ? (
  //   <div>
  //     <nav>
  //       <Link to="/">Quit</Link>
  //     </nav>
  //     <main className="quiz">
  //       <h1>Game</h1>
  //       <h2>{quizData[counter].question}</h2>
  //     </main>
  //   </div>
  // ) : (
  //   <main className="results">
  //     <h1>Quiz Results</h1>
  //   </main>
  // );
  // console.log(questionJSX);
  

  return (
    <>
      {!quizData ? (
        <Loader />
      ) : counter < quizData.length ? (
        <div className="game">
          <nav className="game-nav">
            <h4>{score} Points</h4>
            <Link to="/">Quit</Link>
          </nav>
          <main>
            <Question
              quizData={quizData}
              counter={counter}
              setCount={setCount}
              score={score}
              setScore={setScore}
            />
            {/* <h4>Current score: {score}</h4> */}
          </main>
        </div>
      ) : (
        <h1>Results Page!</h1>
      )}
    </>
  );
};

export default Game;
