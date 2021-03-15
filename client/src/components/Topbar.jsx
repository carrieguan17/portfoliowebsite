import React from 'react';
import styles from '../styles/Topbar.css'

function Topbar () {
  return(
    <div className={styles.topbar}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}><a href="#" className={styles.logoWords}>CG</a></div>
      </div>
      <div className={styles.nav}>
        <div className={styles.item}><a href="#about" className={styles.navLink}>About</a></div>
        <div className={styles.item}><a href="#portfolio" className={styles.navLink}>Portfolio</a></div>
        <div className={styles.item}><a href="#blog" className={styles.navLink}>Blog</a></div>
        <div className={styles.item}><a href="#contact" className={styles.navLink}>Contact</a></div>
      </div>
    </div>
  )
}

export default Topbar