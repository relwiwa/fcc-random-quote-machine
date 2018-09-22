import React from 'react';

/* Also use destructuring of props here */
const QuoteContainer = ({author, quote}) => {
	return (
		/* The classes are missing for the tests to pass */
		<div className="quote-container">
			<p className="quote">{quote}</p>
			<p className="author">{author}</p>
		</div>
	);
};

export default QuoteContainer;
