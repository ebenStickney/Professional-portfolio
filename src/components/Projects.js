import React from 'react';
import {Header} from './Header';

const projectLinks = [
  {
    name: "Expensify App",
    link: "https://expense-app-react.herokuapp.com/" ,
    image: "/images/expensify-ss.png",
    description: "An app that allows users to manage their fiances. Google Account Required"
  },
  {
    name: "Breakout",
    link: "https://ebenstickney.github.io/Breakout/" ,
    image: "/images/breakout-ss.png",
    description: "The classic Brickbreaking game"
  },
  {
    name: "Indecision App",
    link: "https://jib-indecision.herokuapp.com/" ,
    image: "/images/indecision-ss.png",
    description: "A single-page app that helps you decide which task to do."
  }
];

const Projects = () => (
<div id="projects" className="projects-container">
  <div className="project">
    <div className="project__info">
      <h2>Expensify App</h2>
      <h3>An Web Application that helps users manage their finances.</h3>
      <a href="https://expense-app-react.herokuapp.com/" target="_blank">
        <p>Check It Out</p>
      </a>
    </div>
    <div className="project__image">
      <img src="/images/expensify-ss.png" alt="expensity App" />
    </div>
  </div>
  <div className="project">
    <div className="project__image">
      <img src="/images/indecision-ss.png" alt="expensity App" />
    </div>
    <div className="project__info">
      <h2>Indecision App</h2>
      <h3>A single-page app that helps you decide which task to do.</h3>
      <a href="https://jib-indecision.herokuapp.com/" target="_blank">
        <p>Check It Out</p>
      </a>
    </div>
  </div>
  <div className="project">
    <div className="project__info">
      <h2>Breakout</h2>
      <h3>The classic Brickbreaking game.</h3>
      <a href="https://ebenstickney.github.io/Breakout/" target="_blank">
        <p>Check It Out</p>
      </a>
    </div>
    <div className="project__image">
      <img src="/images/breakout-ss.png" alt="expensity App" />
    </div>
  </div>
</div>

);








export default Projects;
