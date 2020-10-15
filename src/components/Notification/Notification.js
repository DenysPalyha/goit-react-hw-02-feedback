import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.scss'

const Notification = ({ positivePercentage }) => {
  return <div className={styles["Notification"]}>{positivePercentage}</div>;
};

Notification.propType = {
  positivePercentage: PropTypes.string.isRequired,
};

export default Notification;
