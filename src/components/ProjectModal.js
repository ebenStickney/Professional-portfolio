import React from 'react';
import Modal from 'react-modal';

const ProjectModal = (props) => (

  <Modal
    isOpen= {props.isModalOpen}
    contentLabel="Project Description"
    closeTimeoutMS={400}
  >
    <h3> More Info </h3>
    <p>{props.description}</p>
    <button onClick={props.onHandleExit}>Go Back</button>
  </Modal>
);

export default ProjectModal;
