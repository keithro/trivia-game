import Nav from "./Nav";
import "./About.css";

const About = () => {

  return (
    <div>
      <Nav location={"about"} />
      <section>
        <h1>About</h1>
        <p>It’s a trivia game! Answer questions and earn points (duh). Select a category and difficulty or leave either on “any” for a mix of difficulty and/or categories.</p>
        <h2>Scoring</h2>
        <p>Points are awarded based on difficulty of a given question as follows:</p>
        <p>Easy: <span>100 points</span></p>
        <p>Medium: <span>200 points</span></p>
        <p>Hard: <span>300 points</span></p>
        <p>Incorrect answers will cost you <span>50 points</span>. Yes, even true or false questions!</p>
        <p>Now gets to steppin'!</p>
      </section>
    </div>
  );
};

export default About;
