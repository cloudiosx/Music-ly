import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = (props) => {
  const { isOpen, onClose, children } = props;

  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keyup', closeOnEsc);
    return () => {
      document.removeEventListener('keyup', closeOnEsc);
    };
  }, [isOpen]);

  const handleClickBackDrop = (e) => {
    e.stopPropagation();
    onClose();
  };

  if (!isOpen) return null;
  return createPortal(
    <div className="modal_overlay" onClick={handleClickBackDrop}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal_closeX" onClick={onClose}>
          <img src="/images/closeIcon.svg" alt="close icon" />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('portal')
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
