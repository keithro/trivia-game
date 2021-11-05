import { useState, useEffect, useRef } from 'react';

import "./Question.css";

const Question = (props) => {
  const [answerActive, setAnswerActive] = useState(false);
  // const answerActive = useRef(false);

  const {counter, setCounter, score, setScore, streak, setStreak, correctCount, setCorrectCount, quizData} = props;
  const { category, type, difficulty, question, correct_answer, incorrect_answers } =quizData[counter];
  const answersArray = [correct_answer, ...incorrect_answers];
  const points = { easy: 100, medium: 200, hard: 300}

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    shuffleArray(answersArray);
  }, [correct_answer]);
  console.log(correct_answer);

  const handleClick = (selectedAnswer, e) => {
    // console.log(e.target.parentElement.className);
    // console.log(selectedAnswer);
    // console.log(correct_answer);

    setAnswerActive(true);
    // answerActive.current = true;

    if(selectedAnswer === correct_answer) {
      // e.target.parentElement.className === "answer" ?
      //   e.target.parentElement.className = "answer correct" :
      //   e.target.className = "answer correct";

      // Then use timeout function to set state after delay
      const timer = setTimeout(() => {
        setScore(score + points[difficulty]);
        setStreak(streak + 1);
        setCorrectCount(correctCount + 1);
        setCounter(counter + 1);

        setAnswerActive(false);
        // answerActive.current = false;
      }, 3000)
      // clearTimeout(timer);
    } else {
      e.target.parentElement.className === "answer" ? 
        e.target.parentElement.className = "answer incorrect" : 
        e.target.className = "answer incorrect";

      // Then use timeout function to set state after delay
      const timer = setTimeout(() => {
        setScore(score - 50);
        setStreak(0);
        setCounter(counter + 1);

        setAnswerActive(false);
        // answerActive.current = false;
      }, 3000);
      // clearTimeout(timer);
    }
  }

  const answers = answersArray.map((answer) => {
    // shuffleArray(answersArray);

    return (
      <div
        className={answer === correct_answer ? "answer correct" : "answer"}
        key={answer}
        onClick={(e) => handleClick(answer, e)}
      >
        {/* <p>{answer}</p> */}
        <p dangerouslySetInnerHTML={{ __html: answer }} />
      </div>
    );
  })
  
  return (
    <section className="question-section">
      <p className="category">
        <span>Category: </span>
        {category}
      </p>
      {/* <h2 className="question">{question}</h2> */}

      <h2 dangerouslySetInnerHTML={{ __html: question }} className="question" />

      <div className={answerActive ? "answers active" : "answers"}>{answers}</div>
      <p className="question-count">Question: {counter}</p>
    </section>
  );
}

export default Question;
