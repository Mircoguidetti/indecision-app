import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        <Modal
            isOpen = {!!props.selectedOption}
            contentLabel = 'Selected option'
            closeTimeoutMS = {200}
            className = 'model'
        >
        <h3 className = 'model__title'>Selected option</h3>
        {props.selectedOption && <p className = 'model__body'>{props.selectedOption}</p>}
        <button className = 'button' onClick = {props.handleClearSelectedOption}>Okay</button>
        
        </Modal>
    )

export default OptionModal;