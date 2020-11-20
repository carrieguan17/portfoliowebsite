import React from 'react';
import styles from '../styles/Topbar.css';

function Topbar2 () {
  return (
    <div className={styles.topBarVP}>
      <div className={styles.tealBar}>
        <div className={styles.tabContainer}>
          <div className={styles.tabItems}>About</div>
          <div className={styles.tabItems}>Portfolio</div>
          <div className={styles.tabItems}>Blog</div>
          <div className={styles.tabItems}>Contact</div>
        </div>
      </div>
      <div className={styles.logoCircle}></div>
      <div className={styles.logoWords}>CG</div>
    </div>
  )
}

export default Topbar2