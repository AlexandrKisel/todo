import React from 'react';
import { connect } from 'react-redux';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import InputBase from '@mui/material/InputBase';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles.scss';
import actions from '../../TasksPanel/actions';
import selectors from '../../TasksPanel/selectors';

function Search(props) {
  const { filterText, setFilterText } = props;

  const onChangeTextHandler = (e) => {
    setFilterText(e.target.value);
  };

  const handleClearFilterText = () => {
    setFilterText('');
  };

  return (
    <div className={styles.searchTask}>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300, padding: '0 10px', }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          label="Search task"
          placeholder="Search Task"
          value={filterText}
          onChange={onChangeTextHandler}
          inputProps={{ 'aria-label': 'search task' }}
        />
        {filterText ? (
          <HighlightOffIcon onClick={handleClearFilterText} />
        ) : (
          <SearchIcon />
        )}
      </Paper>
    </div>
  );
}

Search.propTypes = {
  filterText: PropTypes.string,
  setFilterText: PropTypes.func,
};

const mapStateToProps = (state) => ({
  filterText: selectors.getFilterText(state),
});

export default connect(mapStateToProps, { ...actions })(Search);
