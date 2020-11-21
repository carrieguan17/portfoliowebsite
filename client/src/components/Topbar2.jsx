import React from 'react';
import styles from '../styles/Topbar2.css';

function Topbar2 () {
  return (
    <div className={styles.topBarVP}>
      <div className={styles.logoCircle}></div>
      <div className={styles.logoWords}>CG</div>
      <div className={styles.tealBar}>
        <div className={styles.tabContainer}>
          <div className={styles.tabItems}><a href="#" className={styles.navLink}>About</a></div>
          <div className={styles.tabItems}><a href="#" className={styles.navLink}>Portfolio</a></div>
          <div className={styles.tabItems}><a href="#" className={styles.navLink}>Blog</a></div>
          <div className={styles.tabItems}><a href="#" className={styles.navLink}>Contact</a></div>
        </div>
      </div>
    </div>
  )
}

export default Topbar2