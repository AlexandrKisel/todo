import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';

function AddForm(props) {
  const {
    value,
    onChange,
    handleAddClick,
    labelTitle,
    idValue,
  } = props;

  return (
    <div>
      <Box component="form" noValidate>
        <FormControl
          variant="standard"
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <TextField
            value={value}
            id={idValue}
            type="text"
            onChange={onChange}
            size="small"
            variant="outlined"
            label={labelTitle}
          />
          <Button
            variant="contained"
            onClick={handleAddClick}
            disabled={!value}
          >
            Add
          </Button>
        </FormControl>
      </Box>
    </div>
  );
}

AddForm.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  handleAddClick: PropTypes.func,
  labelTitle: PropTypes.string,
  idValue: PropTypes.string,
};

export default AddForm;
