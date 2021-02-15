import React from 'react';
import styles from '../styles/AboutPhoto.css';

function AboutPhoto () {
  return(
    <div className={styles.aboutPhoto}>
      <img className={styles.profilePhoto} src="https://cgportfolioweb.s3-us-west-1.amazonaws.com/carrie.jpeg"/>
    </div>
  )
}

export default AboutPhoto