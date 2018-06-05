import React from 'react';




const Projects = () => (

  <div className="gallery-container">
    <div className="grid">
      <div className="cell">
        <h3> Expensify App </h3>
        <a href="https://expense-app-react.herokuapp.com/">
          <img src="/images/expensify-ss.png" className="responsive-image" />
          
        </a>
      </div>
      <div className="cell">
        <h3> Breakout </h3>
        <img src="/images/breakout-ss.png" className="responsive-image" />
      </div>
      <div className="cell">
        <h3> Indecision App </h3>
        <img src="/images/indecision-ss.png" className="responsive-image" />
      </div>
    </div>
  </div>

);

export default Projects;
