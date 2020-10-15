import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';

function Statistics({ good, neutral, bad, total }) {
  return (
    <>
      <ul className={styles['list']}>
        <li className={styles["items"]}>good: {good}</li>
        <li className={styles["items"]}>neutral: {neutral}</li>
        <li className={styles["items"]}>bad: {bad}</li>
        <li className={styles["items"]}>total: {total}</li>
      </ul>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;
