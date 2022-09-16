import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="signature">
      Hosted with <a href="https://www.netlify.com">Netlify</a> |{" "}
      <a
        href="https://github.com/Carla-Margara/crystalball-app"
        title="GitHub Repository link"
      >
        Open-Sourced and Coded
      </a>{" "}
      with love by Carla Margara.
    </div>
  );
}
