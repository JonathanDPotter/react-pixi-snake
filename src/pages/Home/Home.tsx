import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="menu">
      <h2>How to Play</h2>
      <div className="instructions">
        <ol>
          <li>Steer the snake with the arrow keys</li>
          <li>Eat food to score points</li>
          <li>Don't run into the sides or your tail</li>
        </ol>
      </div>
      <h2>Choose Your Difficulty</h2>
      <div className="buttons">
        <button type="button" onClick={() => navigate("/game?speed=10")}>
          easy
        </button>
        <button type="button" onClick={() => navigate("/game?speed=7")}>
          normal
        </button>
        <button type="button" onClick={() => navigate("/game?speed=4")}>
          hard
        </button>
      </div>
    </div>
  );
};

export default Home;
