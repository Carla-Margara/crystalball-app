import React from "react";
import cloud from "./media/blue-universe-trim.mp4";

const Main = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={cloud} autoPlay loop muted />
    </div>
  );
};

export default Main;
