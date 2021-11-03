import { useEffect, useState } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";

import Nav from './components/Nav';
import Home from './components/Home';
import Game from './components/Game';

import "./App.css";

function App() {
  const [userPreferences, setUserPreferences] = useState({quizCategory: "", quizDifficulty: ""});

  return (
    <div className="App">
      {/* <Nav /> */}

      <Switch>
        {/* <Route path="/about">
          <About />
        </Route> */}
        <Route path="/game">
          <Game userPreferences={userPreferences} />
        </Route>
        {/* <Route path="/leaderboard">
          <Leaderboard />
        </Route> */}
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
