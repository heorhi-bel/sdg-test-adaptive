import React from 'react';
import styles from './InputField.module.scss';

const InputField = ({ label, type = 'text', register, errors }) => (
  <div className={styles.inputWrapper}>
    <div className={styles.inputField}>
      <input
        type={type}
        {...register(label.toLowerCase())}
        className={errors[label.toLowerCase()] ? styles.invalid : styles.inputText}
        placeholder={label}
        aria-label={label}
      />
    </div>
    {errors[label.toLowerCase()] && (
      <p className={styles.invalidMessage} style={{ color: 'red', marginTop: 0 }}>{errors[label.toLowerCase()].message}</p>
    )}
  </div>
);

export default InputField;