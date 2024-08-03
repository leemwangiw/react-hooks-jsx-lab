import React from "react";

// Assuming `image` is imported from a module
import { image } from "../data/data.js";

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        This is a brief description about me. I am passionate about web
        development and enjoy creating user-friendly applications.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
};

export default About;
