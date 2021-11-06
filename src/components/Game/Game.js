import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader';
import Question from '../Question/Question';
import Results from '../Results/Results';

import "./Game.css";

const Game = (props) => {
  const [quizData, setQuizData] = useState(null);
  const [counter, setCounter] = useState(0);
  // COMBINE INTO ONE OBJ: score, streak, correctCount
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [streak, setStreak] = useState(0);

  const { quizCategory, quizDifficulty } = props.userPreferences;

  
  useEffect(() => {
    let url = "https://opentdb.com/api.php?amount=10";
    url += quizCategory && `&category=${quizCategory}`;
    url += quizDifficulty && `&difficulty=${quizDifficulty}`;
    
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setQuizData(data.results));

    const fetchData = async (url) => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setQuizData(data.results))
        .catch((e) => console.error(e));
    };

    const timer = setTimeout(() => {
      fetchData(url);
    }, 3000);

    return () => clearTimeout(timer);
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

  return (
    <>
      {!quizData ? (
        <Loader />
      ) : counter < quizData.length ? (
        <div className="game">
          <nav className="game-nav">

            <div className="logo">
              <Link to="/">
                <h4>
                  <span className="tilt-left">T</span>
                  <span className="tilt-right">R</span>
                  <span className="tilt-left">I</span>
                  <span className="tilt-right">V</span>
                  <span className="tilt-left">I</span>
                  <span className="tilt-right">A</span>
                </h4>
                <h4>
                  <span className="tilt-right">C</span>
                  <span className="tilt-left">A</span>
                  <span className="tilt-right">N</span>
                  <span className="tilt-left">D</span>
                  <span className="tilt-right">Y</span>
                </h4>
              </Link>
            </div>

            <div className="score-display">
              <p className="score">{score} Points</p>
              {streak >= 3 && <p className="streak">You are on a {streak} question streak!</p>}
            </div>

            <Link to="/" className="quit-btn">Quit</Link>
          </nav>
          <main>
            <Question
              quizData={quizData}
              counter={counter}
              setCounter={setCounter}
              score={score}
              setScore={setScore}
              streak={streak}
              setStreak={setStreak}
              correctCount={correctCount}
              setCorrectCount={setCorrectCount}
            />
          </main>
        </div>
      ) : (
        <Results
          counter={counter}
          score={score}
          correctCount={correctCount}
        />
      )}
    </>
  );
};

export default Game;
