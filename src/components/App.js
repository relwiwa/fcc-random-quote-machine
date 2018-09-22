import React, { Component } from 'react';
import './App.css';

import QuoteContainer from './QuoteContainer';
import Button from './Button';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			quote: 'hello World',
      quotes: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, excepturi.'],
			author: 'Josue',
			twitter: {
				text: 'Twitter',
				icon: 'icon'
			},
      newQuote: {
        text: 'New Quote',
        icon: 'icon'
      },
      buttons: ['Twitter', 'New Quote']
		};
	}
  render() {
    return (
      <div className="rqm grid-container">
        <div className="grid-x grid-padding-x">
          <h1 className="cell text-center">Random Quote Machine</h1>
        </div>
        <QuoteContainer author={this.state.author} quote={this.state.quote} />
        <div className="primary expanded button-group">
          <Button text={this.state.newQuote.text} icon={this.state.newQuote.icon} className="twitter" />
          <Button text={this.state.twitter.text} icon={this.state.twitter.icon} className="new-quote" />
        </div>
      </div>
    );
  }
}

export default App;
