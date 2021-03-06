import { Link } from "react-router-dom";

import Nav from "../Nav/Nav";
import "./Home.css";

const Home = (props) => {
  const {userPreferences, setUserPreferences} = props;

  const handleCategoryChange = (e) => {
    setUserPreferences({ ...userPreferences, quizCategory: e.target.value });
  }

  const handleDifficultyChange = (e) => {
    setUserPreferences({ ...userPreferences, quizDifficulty: e.target.value }); 
  }

  return (
    <div className="home">
      <Nav location={'home'} />

      <main>
        <div className="big-logo">
          <h1>
            <span className="tilt-left">T</span>
            <span className="tilt-right">R</span>
            <span className="tilt-left">I</span>
            <span className="tilt-right">V</span>
            <span className="tilt-left">I</span>
            <span className="tilt-right">A</span>
          </h1>
          <h1>
            <span className="tilt-right">C</span>
            <span className="tilt-left">A</span>
            <span className="tilt-right">N</span>
            <span className="tilt-left">D</span>
            <span className="tilt-right">Y</span>
          </h1>
        </div>
        <p>Select a category and difficulty level then let's begin!</p>

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

          <Link to="/game" className="begin-game-btn">
            Let's Play!
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
