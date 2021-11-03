import { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";

import Nav from "./Nav";
import "./Home.css";

const Home = (props) => {
  const {userPreferences, setUserPreferences} = props;

  const handleCategoryChange = (e) => {
    // console.log(e.target.value);
    setUserPreferences({ ...userPreferences, quizCategory: e.target.value });
  }

  const handleDifficultyChange = (e) => {
    // console.log(e.target.value);
    setUserPreferences({ ...userPreferences, quizDifficulty: e.target.value }); 
  }

  const handleSubmit = (e) => {
    console.log(e.target.value);
    
  }

  return (
    <div className="home">

      {/* DONE: Move Nav outside main element and wrap all in div.home */}
      {/* TODO: Nav {flex: 0 0 5vh} main {flex: 1 1 95vh, move other flex properties inside this container element} */}
      <Nav />

      <main>
        <h1>
          <span className="tilt-left">L</span>
          <span className="tilt-right">E</span>
          <span className="tilt-left">T'</span>
          <span className="tilt-right">S</span>
        </h1>
        <h1>
          <span className="tilt-right">P</span>
          <span className="tilt-left">L</span>
          <span className="tilt-right">A</span>
          <span className="tilt-left">Y</span>
          <span className="tilt-right">!</span>
        </h1>
        <p>Select a category and difficulty level then click "begin"!</p>

        <div className="options-container">
          <label for="quizCategory">Category</label>
          <select
            name="quizCategory"
            id="quizCategory"
            value={userPreferences.quizCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Any</option>
            <option value="27">Animals</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="10">Entertainment: Books</option>
            <option value="32">Entertainment: Cartoon & Animations</option>
            <option value="29">Entertainment: Comics</option>
            <option value="11">Entertainment: Film</option>
            <option value="31">Entertainment: Japanese Anime & Manga</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals & Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="9">General Knowledge</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="20">Mythology</option>
            <option value="24">Politics</option>
            <option value="17">Science & Nature</option>
            <option value="18">Science: Computers</option>
            <option value="30">Science: Gadgets</option>
            <option value="19">Science: Mathematics</option>
            <option value="21">Sports</option>
            <option value="28">Vehicles</option>
          </select>

          <label for="quizDifficulty">Difficulty</label>
          <select
            name="quizDifficulty"
            id="quizDifficulty"
            value={userPreferences.quizDifficulty}
            onChange={handleDifficultyChange}
          >
            <option value="">Any</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          {/* <button onSubmit={handleSubmit}>Begin!</button> */}
          <Link to="/game" className="begin-game-btn">
            Begin!
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
