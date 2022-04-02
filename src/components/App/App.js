import { useState } from "react";
import { Route, Switch } from "react-router-dom";

// import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Game from '../Game/Game';
import About from '../About/About';
import Leaderboard from '../Leaderboard/Leaderboard';

import "./App.css";

function App() {
  const [userPreferences, setUserPreferences] = useState({quizCategory: "", quizDifficulty: ""});

  return (
    <div className="App">
      {/* <Nav /> */}

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/game">
          <Game userPreferences={userPreferences} />
        </Route>
        <Route path="/leaderboard">
          <Leaderboard />
        </Route>
        <Route exact path="/">
          <Home
            userPreferences={userPreferences}
            setUserPreferences={setUserPreferences}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
