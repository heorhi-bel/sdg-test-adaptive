import React, { useState } from 'react';
import styles from './SignUpForm.module.scss';
import InputField from '../../../shared/common/inputField/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
});

const RegistrationForm = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const authResponse = await fetch('https://api.dating.com/identity', {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${btoa(`${data.email}:${data.password}`)}`,
        'Content-Type': 'application/json',
      },
    });

    if (authResponse.ok) {
      const token = authResponse.headers.get('X-Token');
      localStorage.setItem('token', token);
      window.location.href = `https://www.dating.com/people/#token=${token}`;
      return;
    }

    const response = await fetch('https://api.dating.com/identity', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
    });

    if (response.ok) {
      const token = response.headers.get('X-Token');
      localStorage.setItem('token', token);

      onSuccess();
    } else {
      setErrorMessage('Registration failed. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <section className={styles.registrationPopup}>
      <div className={styles.formContainer}>
        <form className={styles.registrationForm} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={styles.formTitle}>
            To register, enter the mail to which our news is sent and set your password
          </h2>
          <InputField label="Email" type="email" register={register} errors={errors} />
          <InputField label="Password" type="password" register={register} errors={errors} />
          <button type="submit" className={styles.submitButton}>
            {isSubmitting ? 'Submitting...' : 'Sign Up'}
          </button>
          {errorMessage && (<p style={{ color: 'red' }}>{errorMessage}</p>)}
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;