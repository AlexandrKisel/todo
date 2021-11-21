import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function EditButton(props) {
  const { handleActivateEditModeClick } = props
  return (
    <div>
      <IconButton aria-label='edit' onClick={handleActivateEditModeClick}>
        <ModeEditIcon />
      </IconButton>
    </div>
  );
}

EditButton.propTypes = {
  handleActivateEditModeClick: PropTypes.func,
}

export default EditButton;
