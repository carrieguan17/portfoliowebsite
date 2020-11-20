import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from './styles/App.css'
import Header from './components/Header.jsx';
import Homepage from './components/Homepage.jsx'
import Topbar from './components/Topbar.jsx';
import AboutWords from './components/AboutWords.jsx';
import AboutPhoto from './components/AboutPhoto.jsx';
import Resources1 from './components/Resources1.jsx';
import Resources2 from './components/Resources2.jsx';
import Portfolio from './components/Portfolio.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div className={styles.container}>
          <Homepage />
          <Topbar />
          <AboutWords />
          <AboutPhoto />
          <Resources1 />
          <Resources2 />
          <Portfolio />
          <Blog />
          <Contact />
        </div>
        <Header />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))