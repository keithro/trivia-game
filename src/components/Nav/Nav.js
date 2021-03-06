import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = (props) => {
  return (
    <nav className="nav">
      <div className="logo">
        {props.location !== "home" && (
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
        )}
      </div>
      <div className="nav-links">
        {props.location !== "home" && <Link to="/">Home</Link>}
        {props.location !== "about" && <Link to="/about">About</Link>}
        {props.location !== "leaderboard" && (
          <Link to="/leaderboard">Leaderboard</Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
