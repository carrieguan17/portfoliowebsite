import React from 'react';
import styles from '../styles/Resources1.css';

function Resources1 () {
  return(
    <div className={styles.resources1}>
      <div className={styles.bar}>
        <div className={styles.nameBar}>JavaScript</div>
        <div className={styles.fillBar95}></div>
        <div className={styles.numBar95}>95%</div>
      </div>
      <div className={styles.bar}>
        <div className={styles.nameBar}>React</div>
        <div className={styles.fillBar95}></div>
        <div className={styles.numBar95}>95%</div>
      </div>
      <div className={styles.bar}>
        <div className={styles.nameBar}>CSS</div>
        <div className={styles.fillBar95}></div>
        <div className={styles.numBar95}>95%</div>
      </div>
      <div className={styles.bar}>
        <div className={styles.nameBar}>Axios/jQuery</div>
        <div className={styles.fillBar80}></div>
        <div className={styles.numBar80}>80%</div>
      </div>
      <div className={styles.bar}>
        <div className={styles.nameBar}>Webpack</div>
        <div className={styles.fillBar65}></div>
        <div className={styles.numBar65}>65%</div>
      </div>
      <div className={styles.bar}>
        <div className={styles.nameBar}>Figma</div>
        <div className={styles.fillBar80}></div>
        <div className={styles.numBar80}>80%</div>
      </div>
      <div className={styles.bar}>
        <div className={styles.nameBar}>MongoDB</div>
        <div className={styles.fillBar80}></div>
        <div className={styles.numBar80}>80%</div>
      </div>
      <div className={styles.bar}>
        <div className={styles.nameBar}>PostgreSQL</div>
        <div className={styles.fillBar80}></div>
        <div className={styles.numBar80}>80%</div>
      </div>
      <div className={styles.bar}>
        <div className={styles.nameBar}>MySQL</div>
        <div className={styles.fillBar80}></div>
        <div className={styles.numBar80}>80%</div>
      </div>
    </div>
  )
}

export default Resources1