import React from 'react';
import styles from './SuccessModalTemplate.module.scss';

function SuccessModalTemplate() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Thank You</h1>
      <p className={styles.message}>
        To complete registration, please check your e-mail
      </p>
    </main>
  );
}

export default SuccessModalTemplate;