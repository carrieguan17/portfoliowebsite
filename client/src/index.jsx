import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from './styles/App.css'
import Header from './components/Header.jsx';
import Homepage from './components/Homepage.jsx';
import Topbar from './components/Topbar.jsx';
import Topbar2 from './components/Topbar2.jsx';
import AboutWords from './components/AboutWords.jsx';
import AboutPhoto from './components/AboutPhoto.jsx';
import Resources1 from './components/Resources1.jsx';
import Resources2 from './components/Resources2.jsx';
import Portfolio from './components/Portfolio.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import Modal from './components/Modal.jsx';

function App () {

  const [showModal, setShowModal] = useState(false);

  function onClickCard () {
    setShowModal(true)
  }

  function onClickCancel () {
    setShowModal(false)
  }

  var PortfolioModal
  if (showModal) {
    PortfolioModal = <Modal onClickCancel={onClickCancel} />
  } else {
    PortfolioModal = null
  }


  return (
    <div>
      {/* <Topbar2 /> */}
      <Topbar />
      {PortfolioModal}
      <div className={styles.container}>
        <Homepage />
        <a id="about" className={styles.aTag}></a>
        <AboutWords />
        <AboutPhoto />
        <Resources1 />
        <Resources2 />
        <a id="portfolio" className={styles.aTag}></a>
        <Portfolio onClickCard={onClickCard} />
        <a id="blog" className={styles.aTag}></a>
        <Blog />
        <a id="contact" className={styles.aTag}></a>
        <Contact />
      </div>
      <Header />
    </div>

  )
}


ReactDOM.render(<App />, document.getElementById('app'))