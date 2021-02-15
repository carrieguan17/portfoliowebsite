import React, { useState } from 'react';
import styles from '../styles/Modal.css';
import classnames from 'classnames';

const icon = {
  "figma": "https://cgportfolioweb.s3-us-west-1.amazonaws.com/figma.png",
  "css": "https://cgportfolioweb.s3-us-west-1.amazonaws.com/css.png",
  "react": "https://cgportfolioweb.s3-us-west-1.amazonaws.com/react.png",
  "nodejs": "https://cgportfolioweb.s3-us-west-1.amazonaws.com/nodejs.jpg",
  "aws": "https://cgportfolioweb.s3-us-west-1.amazonaws.com/aws.png",
  "nextjs": "https://cgportfolioweb.s3-us-west-1.amazonaws.com/next_logo.png",
  "less": "https://cgportfolioweb.s3-us-west-1.amazonaws.com/less.png",
  "graphql": "https://cgportfolioweb.s3-us-west-1.amazonaws.com/graphql.png",
  "javascript": "https://cgportfolioweb.s3-us-west-1.amazonaws.com/javascript.png",
  "docker": "https://cgportfolioweb.s3-us-west-1.amazonaws.com/docker.png",
  "jest": "https://cgportfolioweb.s3-us-west-1.amazonaws.com/jest.png",
  "enzyme": "https://cgportfolioweb.s3-us-west-1.amazonaws.com/enzyme.png",
  "mongo": "https://cgportfolioweb.s3-us-west-1.amazonaws.com/mongo.jpg",
  "postgresql": "https://cgportfolioweb.s3-us-west-1.amazonaws.com/postgress.png",
  "newrelic": "https://cgportfolioweb.s3-us-west-1.amazonaws.com/newrelic.png",
  "loaderio": "https://cgportfolioweb.s3-us-west-1.amazonaws.com/loaderIo.png",
  "nginx": "https://cgportfolioweb.s3-us-west-1.amazonaws.com/nginx.png",
  "mysql": "https://cgportfolioweb.s3-us-west-1.amazonaws.com/mysql.png",
  "chartjs": "https://cgportfolioweb.s3-us-west-1.amazonaws.com/chartjs.png",
  "mongoose": "https://cgportfolioweb.s3-us-west-1.amazonaws.com/mongoose.png",
  "chai": "https://cgportfolioweb.s3-us-west-1.amazonaws.com/chai.png",
  "mocha": "https://cgportfolioweb.s3-us-west-1.amazonaws.com/mocha.png"
}

function Modal ({ onClickCancel, project }) {

  const [moveForward, setMoveForward] = useState(false)

  var leftButton = moveForward?  (<LeftButton />) : null;
  var rightButton = moveForward? null : (<RightButton />);

  function LeftButton () {
    return (
      <div onClick={() => setMoveForward(false)}>
        <svg className={styles.carouselButton} xmlns="http://www.w3.org/2000/svg" viewBox="-4 -6 35 35">><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
      </div>
    )
  }

  function RightButton () {
    return (
      <div onClick={() => setMoveForward(true)}>
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
              <div className={styles.headerWords}>{project.name}</div>
              <div onClick={() => onClickCancel()}>
                <svg className={styles.icon} viewBox="-12 -12 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.modalContent} >
            <div className={styles.leftSide}>{leftButton}</div>
            <div className={styles.carouselViewport}>
              <div
                className={ classnames(
                  styles.modalCarousel,
                  moveForward && styles.moveForward,
                  !moveForward && styles.moveBackward) }
              >
                <div className={styles.carouselCard}>
                  <iframe className={styles.videoPlayer} src={project.demoUrl} frameborder="0" allowfullscreen allow="autoplay"/>
                  <div><a href={project.webUrl} className={styles.webUrl}>{project.webUrl}</a></div>
                  <div className={styles.techIconContainer}>
                    {project.tech.map((item) => (
                      <img src={icon[item]} className={styles.techIcon}/>
                    ))}
                  </div>
                </div>
                <div className={styles.carouselCard}>
                  <img className={styles.projectImage} src={project.imgUrl}/>
                  <div className={styles.projectDescription}>{project.fullDescription}</div>
                </div>
              </div>
            </div>
            <div className={styles.rightSide}>{rightButton}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal