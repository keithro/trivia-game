import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="message">
        <h1>
          <span className="tilt-left">G</span>
          <span className="tilt-right">E</span>
          <span className="tilt-left">T</span>
        </h1>
        <h1>
          <span className="tilt-right">R</span>
          <span className="tilt-left">E</span>
          <span className="tilt-right">A</span>
          <span className="tilt-left">D</span>
          <span className="tilt-right">Y</span>
          <span className="tilt-left">!</span>
        </h1>
      </div>

      <div className="circles">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Loader;
