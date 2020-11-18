import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './components/Header.jsx';
import Topbar from './components/Topbar.jsx';
import About from './components/About.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Topbar />
        <About />
        <Header />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))