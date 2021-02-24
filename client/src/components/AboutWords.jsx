import React from 'react';
import styles from '../styles/AboutWords.css';
import style from '../styles/Typography.css'

function AboutWords () {
  return(
    <div className={styles.aboutWords}>
        <div className={styles.circleContainer}>
          <div></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.about}>About Carrie</div>
        <div className={styles.intro}>
          <p>
            I have been a full-stack software engineer since 2019 when I built a business website from scratch for a CPA firm. Currently I am working in a start-up <a href="https://leetcall.com" target="_blank" className={styles.introLink}>leetcall.com</a> for an automatic scheduling platform. I enjoy making good design and translate visual ideas into codes. It feels very rewarding to create new features and refine user experience. And most importantly, it is exciting to work with like-minded people and challenge each other's ideas in refining algorithm, optimizing website performance, and improving code cleanliness.
          </p>
          <p>
            A few simple lines of codes can change our life or even restructure the system in certin industries. If you have a similar life pursuit, I look forward to connecting with you.
          </p>
        </div>
    </div>
  )
}

export default AboutWords