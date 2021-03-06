import Nav from "../Nav/Nav";
import "./About.css";

const About = () => {

  return (
    <div className="about">
      <Nav location={"about"} />
      <section>
        <div className="about-container">
          <h1>About</h1>
          <p>
            It’s a trivia game! Answer questions and earn points (duh). Select a
            category and difficulty or leave either on “any” for a mix of
            difficulty and/or categories.
          </p>
          <h2>Scoring</h2>
          <p>
            Points are awarded based on the difficulty of a given question as
            follows:
          </p>
          <p className="scoring">
            Easy: <span>100 points</span>
          </p>
          <p className="scoring">
            Medium: <span>200 points</span>
          </p>
          <p className="scoring">
            Hard: <span>300 points</span>
          </p>
          <p>
            Incorrect answers will cost you{" "}
            <span className="scoring">50 points</span>. Yes, even true or false
            questions!
          </p>
          <h2>The Creator</h2>
          <p>
            Trivia Candy was built by <span className="scoring">Keith Rodriguez</span>.
            To see more projects or to get in touch please visit my site{" "}
            <a href="https://www.keithrodriguez.me/">www.keithrodriguez.me</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
