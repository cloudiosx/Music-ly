import PropTypes from 'prop-types';
import React from 'react';
import Modal from '../../pieces/Modal';
import './ModalAuth.css';

const ModalAuth = (props) => {
  const { isOpen, onClose, children, title, onFooterAction, footerQuestion, footerAction } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} style={{ minWidth: 'unset', width: '520px', height: '720px' }}>
      <div className="auth_modal_view">
        <div className="auth_modal_view--title">{title}</div>

        {children}

        <div className="auth_modal_footer">
          <div className="auth_modal_footer_content">
            <div>{footerQuestion}</div>{' '}
            <span className="auth_modal_footer--button active_link" onClick={onFooterAction}>
              {footerAction}
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

ModalAuth.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  onFooterAction: PropTypes.func.isRequired,
  footerQuestion: PropTypes.string.isRequired,
  footerAction: PropTypes.string.isRequired,
};

export default ModalAuth;
