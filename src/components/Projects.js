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
    </div>
    <div className='project project__breakout'>
      <img src="/images/breakout-ss-lg.png" alt="Breakout App" />
    </div>
    <div className='project project__indecision'>
      <img src="/images/indecision-ss-lg.png" alt="Indecision App" />
    </div>
  </div>
);








export default Projects;
