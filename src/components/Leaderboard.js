import Nav from "./Nav";

const Leaderboard = () => {
  return (
    <div>
      <Nav location={"leaderboard"} />
      <section>
        <h1>Leaderboard</h1>
        <div className="point-leader-container">
          <p>Look at all these points!</p>
          <p>Jk. Coming soon...</p>
        </div>
      </section>
    </div>
  );
};

export default Leaderboard;
