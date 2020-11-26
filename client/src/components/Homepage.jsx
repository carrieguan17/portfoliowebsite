import React from 'react';
import styles from '../styles/Homepage.css';

function Homepage () {
  return(
    <div className={styles.homepage}>
      <div className={styles.words}>Web designer and developer based in San Francisco</div>
      <div className={styles.photo}></div>
      <div className={styles.button}>
        <button>View Portfolio</button>
      </div>
    </div>
  )
}

export default Homepage