import React from 'react';
import styles from '../styles/AboutWords.css';
import style from '../styles/Typography.css'

function AboutWords () {
  return(
    <div className={styles.aboutWords}>
      <div className={styles.circleContainer}>
        <div></div>
        <div className={styles.circle}>Express</div>
        <div className={styles.circle}>Responsive</div>
        <div className={styles.circle}>Intuitive</div>
      </div>
      <div className={styles.about}>About Carrie</div>
      <div className={styles.intro}>
        Wikipedia is a multilingual open-collaborative online encyclopedia created and maintained by a community of volunteer editors using a wiki-based editing system. It is one of the 15 most popular websites as ranked by Alexa, as of August 2020.Featuring no ads, it is hosted by the Wikimedia Foundation, an American non-profit organization funded primarily through donations. It was initially an English-language encyclopedia, but versions in other languages were quickly developed. With 6.2 million articles, the English Wikipedia is the largest of the more than 300 Wikipedia encyclopedias. Overall, Wikipedia comprises more than 55 million articles attracting 1.7 billion unique visitors per month.
      </div>
    </div>
  )
}

export default AboutWords