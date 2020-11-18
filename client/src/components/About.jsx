import React from 'react';
import styles from '../styles/About.css';

function About () {
  return (
    <div>
      <div className={styles.about}>
        <div className={styles.features}>
          <div className={styles.circle24}></div>
          <div className={styles.circle25}></div>
          <div className={styles.tWords}>Timeliness</div>
          <div className={styles.circle26}></div>
          <div className={styles.circle27}></div>
          <div className={styles.rWords}>Responsive</div>
          <div className={styles.circle9}></div>
          <div className={styles.circle10}></div>
          <div className={styles.iWords}>Intuitive</div>
        </div>
        <div className={styles.bgCircles}>
          <div className={styles.circle5}></div>
          <div className={styles.circle6}></div>
          <div className={styles.circle7}></div>
          <div className={styles.circle8}></div>
          <div className={styles.circle20}></div>
          <div className={styles.circle21}></div>
          <div className={styles.circle22}></div>
          <div className={styles.circle23}></div>
        </div>
      </div>
    </div>
  )
}

export default About