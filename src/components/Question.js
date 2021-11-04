import {useState} from 'react';

// import "./Question.css";

const Question = (props) => {
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
  shuffleArray(answersArray);
  
  // console.log(quizData);
    console.log(correct_answer);

  const handleClick = (selectedAnswer) => {
    // console.log(selectedAnswer);
    // console.log(correct_answer);

    if(selectedAnswer === correct_answer) {
      setScore(score + points[difficulty]);
      setStreak(streak + 1);
      setCorrectCount(correctCount + 1);
    } else {
      setScore(score - 50);
      setStreak(0);
    }
    setCounter(counter + 1);
  }

  const answers = answersArray.map((answer) => {
    return (
      <div className="answer" key={answer} onClick={() => handleClick(answer)}>
        <p>{answer}</p>
      </div>
    );
  })
  
  
  // FIXME: html codes not displaying properly
  return (
    <section className="question-section">
      <p><span>Category: </span>{category}</p>
      <h2 className="question">{question}</h2>
      <div className="answers">
        {answers}
      </div>
      <p>Question: {counter}</p>
    </section>
  )
}

export default Question;
