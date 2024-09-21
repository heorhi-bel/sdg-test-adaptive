import React, { createContext, useState, useEffect, useContext } from 'react';
import styles from './Modal.module.scss'
import exitImg from "../../../assets/images/exit.png"

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (modalContent) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [modalContent]);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent && (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={closeModal} aria-label="Close">
                    <img src={exitImg}
                    alt="exit" 
                    className={styles.closeIcon} 
                    />
                </button>
                <div className="modal-content">
                    {modalContent}
                </div>
            </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};