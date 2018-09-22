import React from 'react';

const QuoteContainer = (props) => {
	return (
		<div className="quote-div quote-container">
			<p className="text-center lead quote">{props.quote}</p>
			<p className="text-right author">{props.author}</p>
		</div>
	);
};

export default QuoteContainer;
