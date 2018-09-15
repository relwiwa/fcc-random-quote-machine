import axios from 'axios';
import React, { Component } from 'react';

import IconButton from '../../../reusable-components/icon-button';
import IconLink from '../../../reusable-components/icon-link';

import './RQM.scss';

import offlineQuotes from '../data/offlineQuotes';

class RQM extends Component {
  constructor(props) {
    super(props);
    this.offlineQuotesAvailable = [...offlineQuotes];
    this.offlineQuotesUsed = [];
    const quote = this.getRandomOfflineQuote();
    this.state = {
      quote,
      quotePhase: 'quote-appear',
    };
    this.createMarkup = this.createMarkup.bind(this);
    this.getNewQuoteFromApi = this.getNewQuoteFromApi.bind(this);
    this.getRandomOfflineQuote = this.getRandomOfflineQuote.bind(this);
    this.handleNewQuote = this.handleNewQuote.bind(this);
  }
  
  createMarkup(text) {
    return { __html: text.replace(/<\/?[a-zA-Z0-9]+>/g, '') };
  }

  handleNewQuote() {
    this.setState({
      quotePhase: 'quote-disappear',
    })
    return this.getNewQuoteFromApi().then(
      response => {
        this.setState({
          quote: {
            quoteAuthor: response.data[0].title,
            quoteText: response.data[0].content,
          },
          quotePhase: 'quote-appear',
        });
        return response.data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getNewQuoteFromApi() {
    return axios.get(`https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&preventCache=${Date.now()}`);
  }

  getRandomOfflineQuote() {
    if (this.offlineQuotesAvailable.length === 0) {
      this.offlineQuotesAvailable = [...offlineQuotes];
    }
    const quoteIndex = Math.floor(Math.random() * this.offlineQuotesAvailable.length);
    const quote = this.offlineQuotesAvailable[quoteIndex];
    this.offlineQuotesAvailable = [...this.offlineQuotesAvailable];
    this.offlineQuotesAvailable.splice(quoteIndex, 1);
    return quote;
  }


  render() {
    const { quote, quotePhase } = this.state;

    return <div className="rqm grid-container">
      <div className="grid-x grid-padding align-center">
        <h1 className="cell text-center">Random Quote Machine</h1>
        <div className={`${quotePhase} quote-container cell medium-8 large-6 callout`}>
          <div className="grid-x grid-padding">
            <div
              className="quote-text cell"
              dangerouslySetInnerHTML={this.createMarkup(quote.quoteText)}
            />
            <div
              className="quote-author cell text-right"
              dangerouslySetInnerHTML={this.createMarkup(quote.quoteAuthor)}
            />
          </div>
        </div>
        <div className="cell button-group align-center">
          <IconButton
            className="tweet-quote"
            faIcon={['fab', 'twitter']}
            foundationClass="primary"
            text="Tweet Quote"
          />
          <IconButton
            className="new-quote"
            faIcon="redo"
            foundationClass="primary"
            text="New Quote"
            onClick={this.handleNewQuote}
          />
        </div>
      </div>
      <div className="cell api-reference text-center"><small>All quotes are retrieved from <IconLink link="https://www.quotesondesign.com" text="Quotes on Design API" icon="external-link-alt" /></small></div>
    </div>;
  }
}

export default RQM;
