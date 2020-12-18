import React, { useState } from 'react';
import styles from '../styles/Modal.css';


function Modal (props) {

  const [page, setPage] = useState(true);

  var leftButton = page? null : (<LeftButton />)
  var rightButton = page? (<RightButton />) : null

  function LeftButton () {
    return (
      <div onClick={() => setPage(true)}>
        <svg className={styles.carouselButton} xmlns="http://www.w3.org/2000/svg" viewBox="-4 -6 35 35">><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
      </div>
    )
  }

  function RightButton () {
    return (
      <div onClick={() => setPage(false)}>
        <svg className={styles.carouselButton} xmlns="http://www.w3.org/2000/svg" viewBox="-7 -6 35 35"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
      </div>
    )
  }

  return (
    <div>
      <div className={styles.modalBackground}></div>
      <div className={styles.modal}>
        <div className={styles.frame}>
          <div className={styles.modalHeader}>
            <div className={styles.headerContent}>
              <div className={styles.headerWords}>Project Demo</div>
              <div onClick={() => props.onClickCancel()}>
                <svg className={styles.icon} viewBox="-12 -12 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.modalContent} >
            <div className={styles.side}>{leftButton}</div>
            <div className={styles.modalCarousel}>
            </div>
            <div className={styles.side}>{rightButton}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal