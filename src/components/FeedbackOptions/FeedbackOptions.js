import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.scss'

function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className={styles["button-div"]}>
      <button className={styles["button"]} type="button" name="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button className={styles["button"]} type="button" name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button className={styles["button"]} type="button" name="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
