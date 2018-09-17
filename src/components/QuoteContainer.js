import React from 'react';

/* Also use destructuring of props here */
const QuoteContainer = (props) => {
	return (
		/* The classes are missing for the tests to pass */
		<div>
			<p>{props.quote}</p>
			<p>{props.author}</p>
		</div>
	);
};

export default QuoteContainer;
