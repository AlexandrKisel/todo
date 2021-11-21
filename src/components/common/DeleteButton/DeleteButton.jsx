import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteButton(props) {
  const { handleDeleteClick } = props;
  return (
    <div>
      <IconButton aria-label="delete" onClick={handleDeleteClick}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

DeleteButton.propTypes = {
  handleDeleteClick: PropTypes.func,
};

export default DeleteButton;
