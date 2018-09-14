import React from 'react';

import IconButton from '../../../reusable-components/icon-button';

const RQM = (props) => <div className="rqm grid-container">
  <div className="grid-x grid-padding align-center">
    <h1 className="cell text-center">Random Quote Machine</h1>
    <div className="quote-container cell medium-8 large-6 callout">
      <div className="grid-x grid-padding">
        <div className="quote cell">Quote</div>
        <div className="author cell text-right">- Author</div>
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
  <div className="cell api-reference text-center">All quotes are retrieved from Quotes on Design API</div>
</div>;

export default RQM;
