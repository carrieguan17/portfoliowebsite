import React, { useState } from 'react';
import styles from '../styles/Portfolio.css';
import font from '../styles/Typography.CSS'

function Portfolio (props) {

  const projects = [
    {
      name: "Small Business Website",
      shortDescription: "Responsive Layout",
      fullDescription: "to be written",
      imgUrl: "https://mvpimg.s3-us-west-1.amazonaws.com/taxprep.JPG",
      demoUrl: "https://www.youtube.com/embed/hytHQtivKuA",
      webUrl: "https://caacpas.com/59-2/",
      tech: ["nextjs", "less", "react", "graphql", "javascript"]
    },
    {
      name: "Portfolio Website",
      shortDescription: "Full-stack app",
      fullDescription: "Carrie's portfolio website displays her projects and some of her favorite front-end features. These include responsive grid layout, carousel, modals, accordion, and animations.",
      imgUrl: "https://cgportfolioweb.s3-us-west-1.amazonaws.com/homepage.jpg",
      demoUrl: "https://www.youtube.com/embed/oiOzU30eLbg",
      webUrl: "carrieguan.com",
      tech: ["figma", "jest", "enzyme", "docker", "aws"]
    },
    {
      name: "Rental Property App Scalling",
      shortDescription: "System design",
      fullDescription: "to be written",
      imgUrl: "https://cgportfolioweb.s3-us-west-1.amazonaws.com/rental_property.JPG",
      demoUrl: "",
      webUrl: "https://github.com/carrieguan17/service_review",
      tech: ["nodejs", "mongo", "postgresql", "newrelic", "loaderio", "nginx"]
    },
    {
      name: "Shopping List",
      shortDescription: "React state and lifecyle",
      fullDescription: "to be written",
      imgUrl: "https://mvpimg.s3-us-west-1.amazonaws.com/shoppinglist.jpg",
      demoUrl: "https://www.youtube.com/embed/12hK1i-OqfA",
      webUrl: "https://github.com/carrieguan17/shoppinglist",
      tech: ["css", "react", "mysql", "nodejs", "javascript"]
    },
    {
      name: "Registration Form",
      shortDescription: "React forms and props",
      fullDescription: "to be written",
      imgUrl: "https://cgportfolioweb.s3-us-west-1.amazonaws.com/event_registration.JPG",
      demoUrl: "",
      webUrl: "https://github.com/carrieguan17/eventregistration",
      tech: ["css", "react", "mongoose", "nodejs", "javascript"]
    },
    {
      name: "Crypto Rate History",
      shortDescription: "Crypto API and ChartJS",
      fullDescription: "to be written",
      imgUrl: "https://cgportfolioweb.s3-us-west-1.amazonaws.com/cryto_rate_history.JPG",
      demoUrl: "",
      webUrl: "",
      tech: ["chartjs", "react", "nodejs", "javascript", "mocha", "chai"]
    }
  ]

  const Card = ({ project, onClickCard }) => {
    return(
      <div className={styles.card} onClick={() => props.onClickCard(project)}>
        <img className={styles.cardImg} src={project.imgUrl}></img>
        <div className={styles.cardWords}>
          <div><b>{project.name}</b></div>
          <div>{project.shortDescription}</div>
        </div>
    </div>
    )
  }

  return(
    <div className={styles.portfolio}>
        <div className={styles.cardContainer}>
          {projects.map((project) => <Card project={project} onClick={props.onClickCard}/>)}
        </div>
    </div>
  )
}

export default Portfolio