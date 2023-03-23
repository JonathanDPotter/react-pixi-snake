import React from "react";

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>
        This is my version of the{" "}
        <a href="https://www.youtube.com/watch?v=QTcIXok9wNY">
          Web Dev Simplified snake game tutorial
        </a>
        converted to use pixi.js and react.js. It is a bery simple example of
        using pixi.js in React, but I have learned a lot about using these two
        together during the process of making this game.
      </p>
      <br />
      <h3>Technologies used</h3>
      <p>
        This app is written in React with TypeScript. It uses React-Router for
        page routing, SASS for styling, pixi.js for rendering graphics and{" "}
        <a href="https://pixijs.io/pixi-react/">ReactPixi</a> to use pixi.js in
        React. The app was bootstrapped with Vite.
      </p>
    </div>
  );
};

export default About;
