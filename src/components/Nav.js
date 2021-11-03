import { Route, Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/game">Play</Link>
      <Link to="/about">About</Link>
      <Link to="/leaderboard">Leaderboard</Link>
    </nav>
  );
};

export default Nav;
