import React from 'react';
import styles from './home.module.scss';
import Step from '../../shared/common/step/step';
import { useModal } from '../../shared/common/modal/Modal';
import SignUpForm from './SignUpForm/SignUpForm';
import SuccessModalTemplate from './SuccessModal/SuccessModalTemplate';
import groupImg from "../../assets//images/Group_4840.png"



const HomePage = () => {
    const { openModal } = useModal();

    const openModalSuccess = () => { openModal(<SuccessModalTemplate />)}
    const handleSignUp = () => { openModal(<SignUpForm onSuccess={openModalSuccess} />)};


    const steps = [
        { number: '1', content: 'Subscribe to our News' },
        { number: '2', content: <button className={styles.signUpButton} onClick={handleSignUp}>Sign Up</button> },
        { number: '3', content: 'Check your email inbox' },
        { number: '4', content: 'Wait till September 22' }
    ];

    return (
        <div className={styles.wrapperMain}>
            <section className={styles.container}>
            <img 
                src={groupImg} 
                alt="How to Participate illustration" 
                className={styles.image} 
            />
            <div className={styles.listContainer}>
                <h1 className={`${styles.title} textGradient`}>How to Participate</h1>
                <div className={styles.stepsList}>
                    {steps.map((step, index) => (
                        <Step key={index} number={step.number} content={step.content} />
                    ))}
                </div>
            </div>
            </section>
        </div>
      );
    };


export default HomePage;