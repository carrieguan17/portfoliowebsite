import React, { useState } from 'react';
import styles from '../styles/Portfolio.css';
import font from '../styles/Typography.CSS'

function Portfolio (props) {

  const projects = [
    {
      name: "Small Business Website",
      shortDescription: "Responsive Layout",
      fullDescription: "This is originally a website for marketing purpose. Currently a new version is under construction to address the increasing inquiries on pricing, appointment schedule and business process. New features include: a selection pannel for users to choose tax situations for a quote; a calendar for users to schedule a brief phone discussion; an authenticated platform for users to upload and e-sign documents, and access tax returns.",
      imgUrl: "https://mvpimg.s3-us-west-1.amazonaws.com/taxprep.JPG",
      demoUrl: "https://www.youtube.com/embed/hytHQtivKuA",
      webUrl: "https://caacpas.com/59-2/",
      tech: ["nextjs", "less", "react", "graphql", "javascript"]
    },
    {
      name: "Portfolio Website",
      shortDescription: "Full-stack app",
      fullDescription: "Carrie's portfolio website displays her projects and some of her favorite front-end features. These include responsive grid layout, carousel, modals, accordion, and animations. The demo video shows the first version available at http://18.144.29.220/. If you are reading this paragraph, you are visiting the upgraded version! Design and coding are fun and success is going beyond one's past self. Wish you happily feel the same :) ",
      imgUrl: "https://cgportfolioweb.s3-us-west-1.amazonaws.com/homepage.jpg",
      demoUrl: "https://www.youtube.com/embed/oiOzU30eLbg",
      webUrl: "carrieguan.com",
      tech: ["figma", "jest", "enzyme", "docker", "aws"]
    },
    {
      name: "Rental App Scalling",
      shortDescription: "System design",
      fullDescription: "This is to deploy and scale an application to serve 10 million users and support at least 800 requests per second. Milestones include choice of databse along with schema design and DBMS benchmarking, stress test with K6 and loader.io, identify performance issues using New Relic and set up a load balancer Nginx.",
      imgUrl: "https://cgportfolioweb.s3-us-west-1.amazonaws.com/rental_property.JPG",
      demoUrl: "https://www.youtube.com/embed/RtuUnjvyK7w",
      webUrl: "https://github.com/carrieguan17/service_review",
      tech: ["nodejs", "mongo", "postgresql", "newrelic", "loaderio", "nginx"]
    },
    {
      name: "Shopping List",
      shortDescription: "React state and lifecyle",
      fullDescription: "This is Carrie's first full-stack app! A form is to capture the item name and the amount. Once the user adds the item, a post request will update the database. Subsequently a get request is fired to obtain the revised shopping list and re-render the page.",
      imgUrl: "https://mvpimg.s3-us-west-1.amazonaws.com/shoppinglist.jpg",
      demoUrl: "https://www.youtube.com/embed/12hK1i-OqfA",
      webUrl: "https://github.com/carrieguan17/shoppinglist",
      tech: ["css", "react", "mysql", "nodejs", "javascript"]
    },
    {
      name: "Chat Room",
      shortDescription: "HTML and CSS",
      fullDescription: "A Twitter clone powered by JavaScript, HTML and vanilla CSS. The homepage displays the user new tweets, the timestamps of when the tweets were created, and allow the user to click on a username to see that user's timeline. Each user's timeline has their own theme.",
      imgUrl: "https://cgportfolioweb.s3-us-west-1.amazonaws.com/chatterbox.jpeg",
      demoUrl: "https://www.youtube.com/embed/KQ-ICQgbUok",
      webUrl: "https://github.com/carrieguan17/seip2006-twiddler",
      tech: ["css", "jquery", "mocha", "chai"]
    },
    {
      name: "Crypto Rate History",
      shortDescription: "CoinDesk API and ChartJS",
      fullDescription: "A single-page app for viewing the historical price data for Bitcoin. Once a user input the date range, a request is fired to CoinDesk to obtain data for its Bitcoin Price Index within the date range. The closing prices are displayed in a time-series chart.",
      imgUrl: "https://cgportfolioweb.s3-us-west-1.amazonaws.com/cryto_rate_history.JPG",
      demoUrl: "https://www.youtube.com/embed/wAaRyJzXM50",
      webUrl: "https://github.com/carrieguan17/hrsf129-mini-apps-2",
      tech: ["chartjs", "react", "nodejs", "javascript"]
    }
  ]

  const Card = ({ project, onClickCard }) => {
    return(
      <div className={styles.card} onClick={() => props.onClickCard(project)}>
        <img className={styles.cardImg} src={project.imgUrl}></img>
        <div>
          <div className={styles.cardTitle}>{project.name}</div>
          <div className={styles.cardWords}>{project.shortDescription}</div>
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