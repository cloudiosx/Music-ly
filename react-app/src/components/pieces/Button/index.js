import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const { type, size, className, children, ...rest } = props;
  return (
    <button className={`myButton ${type === 'text' ? 'button-text' : 'button-fill'} ${size} ${className}`} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
};
Button.defaultProps = {
  type: 'text',
  size: 'small', // small medium
  className: '',
};

export default Button;
