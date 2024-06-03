import React from 'react';
import styles from '../styles/LoginModal.module.css'

interface loginModalProps {
	closeModal: Function
}

const LoginModal = (loginModalProps: loginModalProps) => {

	const { closeModal } = loginModalProps

  return (
    <div className={styles.modal}>
        <div className={styles.modalContent}>
          <button className={styles.closeButton} onClick={() => closeModal()}>×</button>
          <div className={styles.leftSection}>
            <h2>Sign In to your account</h2>
            <form>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Username" />
              </div>
              <div className={styles.inputGroup}>
                <input type="password" placeholder="Password" />
              </div>
              <button type="submit" className={styles.loginButton}>Login</button>
            </form>
          </div>
          <div className={styles.rightSection}>
            <h2>Sign up</h2>
            <p>Be a borrower for hassle free loan with best interest rates. Be a lender for lending at higher rates.</p>
            <button className={styles.registerButton}>Register Now!</button>
          </div>
        </div>
      </div>
  );
};

export default LoginModal;
