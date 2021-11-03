import {useState} from 'react';

// import "./Question.css";

const Question = (props) => {
  
  const {counter, setCounter, score, setScore, quizData} = props;
  const { type, difficulty, question, correct_answer, incorrect_answers } =quizData[counter];
  const answersArray = [correct_answer, ...incorrect_answers];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(answersArray);
  
  // console.log(question);
  // console.log(answersArray);
  console.log(correct_answer);


  const handleClick = (selectedAnswer) => {
    // console.log(e);
    console.log(selectedAnswer);
    
  }

  const answers = answersArray.map((answer) => {
    console.log(answer);
    
    return (
      <div className="answer" key={answer} onClick={() => handleClick(answer)}>
        <p>{answer}</p>
      </div>
    );
  })
  
  
  // FIXME: html codes not displaying properly
  return (
    <section className="question-section">
      <h2 className="question">{question}</h2>
      <div className="answers">
        {answers}
      </div>
    </section>
  )
}

export default Question;
