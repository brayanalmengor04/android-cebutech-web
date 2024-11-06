// src/components/LoadingSpinner/LoadingSpinner.jsx
import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => (
  <div id="js-preloader" className={styles.preloader}>
    <div className={styles.preloaderInner}>
      <span className={styles.dot}></span>
      <div className={styles.dots}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
);

export default LoadingSpinner;
