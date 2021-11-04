import Nav from "./Nav";

const Leaderboard = () => {
  return (
    <div>
      <Nav location={"leaderboard"} />
      <section>
        <h1>Leaderboard</h1>
        <div className="point-leader-container">Look at all these points!</div>
      </section>
    </div>
  );
};

export default Leaderboard;
