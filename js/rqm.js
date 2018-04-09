function RQM() {
	let RQMRoot = null;
	let quoteContainer = null;
	let nextQuoteBtn = null;
	let tweetQuoteBtn = null;
	const offlineQuotes = ['Hello World', 'Olá Mundo', 'Hallo Welt'];

	this.initializeRQM = () => {
		RQMRoot = document.querySelector('#rqm-root');
		this.setupQuoteContainer();
		this.setupNextQuoteBtn();
	};
	
	this.setupQuoteContainer = () => {
		quoteContainer = document.createElement("div");
		quoteContainer.className = "cell callout";
		quoteContainer.innerHTML = `<p>${this.getRandomOfflineQuote()}</p>`;
		RQMRoot.appendChild(quoteContainer);
	};
	
	this.setupNextQuoteBtn = () => {
		nextQuoteBtn = document.createElement("div");	
		nextQuoteBtn.className = "button success expanded";
		nextQuoteBtn.innerText = "Button";
		RQMRoot.appendChild(nextQuoteBtn);
	};
	
	this.setupTweetQuoteBtn = () => {
		
	};
	
	this.setNewQuote = () => {
		
	};
	
	this.getRandomOfflineQuote = () => {
		return offlineQuotes[Math.floor(Math.random() * offlineQuotes.length)];
	};

}

const RQMInstance = new RQM();
RQMInstance.initializeRQM();
