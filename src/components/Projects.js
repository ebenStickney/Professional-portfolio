import React from 'react';


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

  <div className="container">
    <div className='project project__expensify'>
      <img src="/images/expensify-ss-lg.png" alt="Expense App" />
      <div className="overlay-text">
        <p className="project-description">
          An app built to help the user keep track of and manage
          their expenses.
        </p>
        <a
          href="https://expense-app-react.herokuapp.com/"
          className="button project-link"
          target="_blank"
          >
            Check It Out
        </a>
      </div>
    </div>
    <div className='project project__breakout'>
      <img src="/images/breakout-ss-lg.png" alt="Breakout App" />
      <div className="overlay-text">
        <p className="project-description">
          The classic brick-breaking game.
          Created with only JS, and HTML canvas
        </p>
        <a
          href="https://ebenstickney.github.io/Breakout/"
          className="button project-link"
          target="_blank"
          >
            Check It Out
        </a>
      </div>
    </div>
    <div className='project project__indecision'>
      <img src="/images/indecision-ss-lg.png" alt="Indecision App" />
      <div className="overlay-text">
        <p className="project-description">
          A single-page app that helps the user pick a task from a
          to-do list.
        </p>
        <a
          href="https://jib-indecision.herokuapp.com/"
          className="button project-link"
          target="_blank"
          >
            Check It Out
        </a>
      </div>
    </div>
  </div>
);








export default Projects;
