import React from 'react';
import styles from '../styles/Homepage.css';

function Homepage () {
  return(
      <div className={styles.homepage}>
        <div className={styles.words}>Carrie is a web designer and developer based in San Francisco
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.imgTag} src="https://cgportfolioweb.s3-us-west-1.amazonaws.com/Group+2.png"/>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.button}>
            <a href="#portfolio">
              View Profile
            </a>
          </div>
        </div>
      </div>
  )
}

export default Homepage