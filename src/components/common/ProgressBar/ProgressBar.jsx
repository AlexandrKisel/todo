import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
// import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import styles from './styles.scss';

function ProgressBar() {
    // const { all, done } = props;
    const value = 5 / 10 * 100;
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

// ProgressBar.propTypes = {
//     all: PropTypes.number,
//     done: PropTypes.number,

// }

export default ProgressBar;
