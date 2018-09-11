import React, { Component } from 'react';
import './App.css';

import QuoteContainer from './QuoteContainer';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			quote: 'hello World',
			author: 'Josue'
		};
	}
  render() {
    return (
      <div className="rqm grid-container">
        <div className="grid-x grid-padding-x">
          <h1 className="cell">Random Quote Machine</h1>
        </div>
        <QuoteContainer author={this.state.author} quote={this.state.quote} />
      </div>
    );
  }
}

export default App;
