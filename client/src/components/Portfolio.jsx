import React from 'react';
import styles from '../styles/Portfolio.css';
import font from '../styles/Typography.CSS'

function Portfolio () {
  return(
    <div className={styles.portfolio}>
      <div className={styles.card}>
        <img className={styles.cardImg}></img>
        <div className={styles.cardWords}>
          <div>Small Business Website</div>
          <div>Wordpress website design</div>
        </div>
      </div>
      <div className={styles.card}>
        <img className={styles.cardImg}></img>
        <div className={styles.cardWords}>
          <div>Portfolio Website</div>
          <div>Full-stack app</div>
        </div>
      </div>
      <div className={styles.card}>
        <img className={styles.cardImg}></img>
        <div className={styles.cardWords}>
          <div>Rental Property Scalling </div>
          <div>System design</div>
        </div>
      </div>
      <div className={styles.card}>
        <img className={styles.cardImg}></img>
        <div className={styles.cardWords}>
          <div>Shopping List</div>
          <div>React state and lifecyle</div>
        </div>
      </div>
      <div className={styles.card}>
        <img className={styles.cardImg}></img>
        <div className={styles.cardWords}>
          <div>Registration Form</div>
          <div>React forms and props</div>
        </div>
      </div>
      <div className={styles.card}>
        <img className={styles.cardImg}></img>
        <div className={styles.cardWords}>
          <div>Crypto Exchange Rate History</div>
          <div>Crypto API and ChartJS</div>
        </div>
      </div>
    </div>
)
}

export default Portfolio