/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './styles.scss';

function ProgressBar(props) {
    const { tasks } = props;
    console.log(Number(tasks.length));
    console.log(tasks.filter((item) => item.isDone === true).length);

    const value = tasks.filter((item) => item.isDone === true).length / Number(tasks.length) * 100;
  return (
      
    <div className={styles.progressBar} >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" value={value}/>
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            value,
          )}%`}</Typography>
        </Box>
      </Box>
    </div>
  );
}

ProgressBar.propTypes = {
    tasks: PropTypes.array,
   }

export default ProgressBar;
