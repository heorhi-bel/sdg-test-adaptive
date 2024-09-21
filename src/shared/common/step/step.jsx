import React from 'react';
import styles from './step.module.scss';

const Step = ({ number, content }) => {
  return (
    <div className={styles.stepItem}>
      <div className={`${styles.stepNumber} textGradient`}>{number}.</div>
      <div className={styles.stepContent}>{content}</div>
    </div>
  );
};

export default Step;