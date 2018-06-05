import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
     isOpen={!!props.selectedOption}
     onRequestClose={props.onModalExit}
     contentLabel="App Modal"
     closeTimeoutMS={400}
     className="modal"
    >

      <h2 className="modal__title"> Find Out More </h2>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}

      <button className="button" onClick={props.onModalExit}>Okay</button>
    </Modal>
);

export default OptionModal;
