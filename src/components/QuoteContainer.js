import React from 'react';

const QuoteContainer = (props) => {
	return (
		<div>
			<p>{props.quote}</p>
			<p>{props.author}</p>
		</div>
	);
};

export default QuoteContainer;
