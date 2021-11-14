import React from 'react';
import { connect } from 'react-redux';
// import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles.scss';
import actions from '../../TasksPanel/actions'

function Search() {
  return (
    <div className={styles.searchTask}>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          label="Search task"
          placeholder="Search Task"
          inputProps={{ 'aria-label': 'search task' }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      {/* <TextField
        label="Search task"
        size="small"
        variant="standart"
        // value={}
        // onChange={onChangeTexthandler}
      /> */}
    </div>
  );
}

const mapStateToProps = () => ({

})

export default connect(mapStateToProps, {...actions})(Search);
