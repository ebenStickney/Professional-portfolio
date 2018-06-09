import React from 'react';
import ProjectItem from './ProjectItem';










class Projects extends React.Component {

  state = {
    modalIsOpen: false,
  };


  render() {
    return (
      <div className="box-container">
       <div className="gallery-container">
         <ProjectItem />
       </div>
      </div>

    )
  }
};






export default Projects;
