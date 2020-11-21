import React from 'react';
import styles from '../styles/Topbar.css'

function Topbar () {
  return(
    <div className={styles.topbar}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>CG</div>
      </div>
      <div className={styles.nav}>
        <div className={styles.item}><a href="#" className={styles.navLink}>About</a></div>
        <div className={styles.item}><a href="#" className={styles.navLink}>Portfolio</a></div>
        <div className={styles.item}><a href="#" className={styles.navLink}>Blog</a></div>
        <div className={styles.item}><a href="#" className={styles.navLink}>Contact</a></div>
      </div>
    </div>
  )
}

export default Topbar