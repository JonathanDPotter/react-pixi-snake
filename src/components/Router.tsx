import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Stage from "./Stage/Stage";
import About from "../pages/About/About";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/game" element={<Stage />} />
    </Routes>
  );
};

export default Router;
