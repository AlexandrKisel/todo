import React from 'react';
import PropTypes from 'prop-types';
import ButtonUI from '@mui/material/Button';

function Button(props) {
  const { text, handleClick } = props;
  return (
    <div>
      <ButtonUI variant="contained" onClick={handleClick}>{text}</ButtonUI>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
