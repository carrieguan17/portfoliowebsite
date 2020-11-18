import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './components/Header.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>test</h1>
        <Header />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))