import React from 'react';
import ProjectItem from './ProjectItem';










class Projects extends React.Component {

  state = {
    modalIsOpen: false,
  };

  handleClick = () => {
    this.setState( () => ({modalIsOpen: true}));
  }

  handleExit = () => {
    this.setState( () => ({modalIsOpen: false}));
  }

  render() {
    return (
      <div>
       <div className="gallery-container">
         <ProjectItem
          isModalOpen={this.state.modalIsOpen}
          onClick={this.handleClick}
          onHandleExit={this.handleExit}
         />
       </div>
      </div>

    )
  }
};






export default Projects;
