import { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import Loader from './Loader';

import "./Game.css";

const Game = (props) => {
  // STATES: counter, quizData, score, streak
  const [quizData, setQuizData] = useState(null);
  const [counter, setCount] = useState(0);
  const [score, setScore] = useState(0);

  const { quizCategory, quizDifficulty } = props.userPreferences;

  // FIXME: How can you make this work?
  // const { type, difficulty, question, correct_answer } = quizData && quizData[counter];
  // const answers = quizData && [correct_answer, ...quizData[counter].incorrect_answers];
  
  useEffect(() => {
    let url = "https://opentdb.com/api.php?amount=10";
    url += quizCategory && `&category=${quizCategory}`;
    url += quizDifficulty && `&difficulty=${quizDifficulty}`;
    
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuizData(data.results));
  }, []);

  // RENDERING COMPONENTS
  // If no questions: render loader
  // If questions: play game/render question 1
    // - "Loop" through array of questions:
    // - Start with question[0] 
      // - if (question[counter]) {render question}
      // - Combine correct_answer and incorrect_answers into one array and shuffle answers
      // - render # of answers based on q.type (multi choice, true/false)
      // - wait for onClick event then:
        // - compare answer
        // - increment or decrement score based on q.difficulty
        // - increment counter (which will rerender page with q[2])
  // If(counter > quizData.length)
    // - When done, display final score and results (# correct out of arr.length or counter)

  const questionJSX = quizData[counter] ? (
    <div>
      <nav>
        <Link to="/">Quit</Link>
      </nav>
      <main className="quiz">
        <h1>Game</h1>
        <h2>{quizData[counter].question}</h2>
      </main>
    </div>
  ) : (
    <main className="results">
      <h1>Quiz Results</h1>
    </main>
  );

  return (
    <>
      {/* FIXME: Should you move this logic for Loader inside the function above? */}
      {!quizData ? (
        <Loader />
      ) : (
        {questionJSX}
      )}
    </>
  );
};

export default Game;
