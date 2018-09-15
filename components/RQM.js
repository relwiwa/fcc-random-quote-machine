import React, { Component } from 'react';

import IconButton from '../../../reusable-components/icon-button';
import IconLink from '../../../reusable-components/icon-link';

import './RQM.scss';

import offlineQuotes from '../data/offlineQuotes';

class RQM extends Component {
  constructor(props) {
    super(props);
    const quote = offlineQuotes[Math.floor(Math.random() * offlineQuotes.length)];
    this.state = {
      quote,
    };
  }

  render() {
    const { quote } = this.state;

    return <div className="rqm grid-container">
      <div className="grid-x grid-padding align-center">
        <h1 className="cell text-center">Random Quote Machine</h1>
        <div className="quote-container cell medium-8 large-6 callout">
          <div className="grid-x grid-padding">
            <div className="quote-text cell">{quote.quoteText}</div>
            <div className="quote-author cell text-right">{quote.quoteAuthor}</div>
          </div>
        </div>
        <div className="cell button-group align-center">
          <IconButton
            text="Tweet Quote"
            faIcon={['fab', 'twitter']}
            className="tweet-quote"
          />
          <IconButton
            text="New Quote"
            faIcon="redo"
            className="new-quote"
          />
        </div>
      </div>
      <div className="cell api-reference text-center"><small>All quotes are retrieved from <IconLink link="https://www.quotesondesign.com" text="Quotes on Design API" icon="external-link-alt" /></small></div>
    </div>;
  }
}

export default RQM;
