import React from 'react';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2>Login</h2>
        <form>
          <div className={styles.inputGroup}>
            <label>Username</label>
            <input type="text" placeholder="Enter username" />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
        <div className={styles.registerLink}>
          <a href="/register">Don't have an account? Register here</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
