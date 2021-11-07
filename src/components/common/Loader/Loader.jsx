import React from 'react';
import PropTypes from 'prop-types';
import loaderIcon from '../../../assets/icons/load.svg';
import styles from './styles.scss';

function Loader({ visible }) {
  return (
    <div className={`${styles.loader} ${visible ? styles.visible : ''}`}>
      <img src={loaderIcon} alt="loader-icon" />
    </div>
  );
}

Loader.propTypes = {
  visible: PropTypes.bool,
};
export default Loader;
