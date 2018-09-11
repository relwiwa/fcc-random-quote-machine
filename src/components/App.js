import React, { Component } from 'react';
import './App.css';

import QuoteContainer from './QuoteContainer';

class App extends Component {
  render() {
    return (
      <div className="rqm grid-container">
        <div className="grid-x grid-padding-x">
          <h1 className="cell">Random Quote Machine</h1>
        </div>
      </div>
    );
  }
}

export default App;
