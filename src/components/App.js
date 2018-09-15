import React, { Component } from 'react';
import './App.css';

import QuoteContainer from './QuoteContainer';
import Button from './Button';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			quote: 'hello World',
			author: 'Josue',
			twitter: {
				text: 'Twiter',
				icon: 'icon'
			},
      newQuote: {
        text: 'New Quote',
        icon: 'icon'
      }
		};
	}
  render() {
    return (
      <div className="rqm grid-container">
        <div className="grid-x grid-padding-x">
          <h1 className="cell">Random Quote Machine</h1>
        </div>
        <QuoteContainer author={this.state.author} quote={this.state.quote} />
        <Button text={this.state.newQuote.text} icon={this.state.newQuote.icon} className="twitter" />
        <Button text={this.state.twitter.text} icon={this.state.twitter.icon} className="new-quote" />
      </div>
    );
  }
}

export default App;
