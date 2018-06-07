import React from 'react';
import Modal from 'react-modal';

const ProjectModal = (props) => (

  <Modal
    isOpen= {props.isModalOpen}
    contentLabel="Project Description"
    closeTimeoutMS={400}
    className="modal"
  >
      <div className="modal__body">
      <h2 className="modal__title"> More Info </h2>
      <p>sample text</p>
      <img src={props.image} className="responsive-images"/>

      <button className="button" onClick={props.onHandleExit}>Go Back</button>
      </div>
    </Modal>
);

export default ProjectModal;
