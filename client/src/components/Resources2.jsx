import React from 'react';
import styles from '../styles/Resources2.css';

function Resources2 () {
  return(
    <div className={styles.resources2}>
      <div className={styles.bar}>
        <div className={styles.nameBar}>NodeJS</div>
        <div className={styles.fillBar80}></div>
        <div className={styles.numBar80}>80%</div>
      </div>
      <div className={styles.bar}>
        <div className={styles.nameBar}>Docker</div>
        <div className={styles.fillBar65}></div>
        <div className={styles.numBar65}>65%</div>
      </div>
      <div className={styles.bar}>
        <div className={styles.nameBar}>EC2</div>
        <div className={styles.fillBar65}></div>
        <div className={styles.numBar65}>65%</div>
      </div>
      <div className={styles.bar}>
        <div className={styles.nameBar}>S3</div>
        <div className={styles.fillBar65}></div>
        <div className={styles.numBar65}>65%</div>
      </div>
      <div className={styles.bar}>
        <div className={styles.nameBar}>Nginx</div>
        <div className={styles.fillBar65}></div>
        <div className={styles.numBar65}>65%</div>
      </div>
      <div className={styles.bar}>
        <div className={styles.nameBar}>New Relic</div>
        <div className={styles.fillBar65}></div>
        <div className={styles.numBar65}>65%</div>
      </div>
      <div className={styles.bar}>
        <div className={styles.nameBar}>Mocha/Chai</div>
        <div className={styles.fillBar80}></div>
        <div className={styles.numBar80}>80%</div>
      </div>
      <div className={styles.bar}>
        <div className={styles.nameBar}>Jest/Enzyme</div>
        <div className={styles.fillBar80}></div>
        <div className={styles.numBar80}>80%</div>
      </div>
      <div className={styles.bar}>
        <div className={styles.nameBar}>Loader.io</div>
        <div className={styles.fillBar80}></div>
        <div className={styles.numBar80}>80%</div>
      </div>
      <a id="portfolio"></a>
    </div>
  )
}

export default Resources2