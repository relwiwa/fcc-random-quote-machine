import React from 'react';

/* Also use destructuring of props here */
const QuoteContainer = (props) => {
	return (
<<<<<<< HEAD
		<div className="quote-div quote-container">
			<p className="text-center lead quote">{props.quote}</p>
			<p className="text-right author">{props.author}</p>
=======
		/* The classes are missing for the tests to pass */
		<div>
			<p>{props.quote}</p>
			<p>{props.author}</p>
>>>>>>> c45477e983da6d642b2cc7ce5467d5229106b280
		</div>
	);
};

export default QuoteContainer;
