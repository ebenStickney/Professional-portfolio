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
    link: "https://github.com/ebenStickney" ,
    image: "/images/indecision-ss.png",
    description: "A single-page app that helps you decide which task to do."
  }
];


const ProjectItem = (props) => {




  return (

          <div className="grid">
             {
               projectLinks.map((project, index) => {
             return (
            <div key={project.name} className={" cell cell" + index}>
                 <h3>{project.name}</h3>
                 <a
                  href="#"
                  onClick={props.onClick}
                  >
                   <img src={project.image} className="responsive-image" />
                 </a>

          </div>
          );
           })
         }

     </div>
    );
};

  export default ProjectItem;
