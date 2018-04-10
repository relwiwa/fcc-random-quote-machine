function RQM() {
	let RQMRoot = null;
	let quoteContainer = null;
	let nextQuoteBtn = null;
	let tweetQuoteBtn = null;
	let btnsContainer = null;
	const offlineQuotes = ['Hello World', 'Olá Mundo', 'Hallo Welt'];

	this.initializeRQM = () => {
		RQMRoot = document.querySelector('#rqm-root');
		this.setupQuoteContainer();
		this.setupNextQuoteBtn();
		this.setupTweetQuoteBtn();
		this.setupBtnsContainer();
	};
	
	this.setupQuoteContainer = () => {
		quoteContainer = document.createElement("div");
		quoteContainer.className = "cell callout";
		quoteContainer.innerHTML = `<p>${this.getRandomOfflineQuote()}</p>`;
		RQMRoot.appendChild(quoteContainer);
	};

	this.setupBtnsContainer = () => {
		btnsContainer = document.createElement("div");
		btnsContainer.className = "cell callout";
		btnsContainer.id = "btnContainer";
		btnsContainer.innerHTML = nextQuoteBtn.outerHTML + tweetQuoteBtn.outerHTML;
		RQMRoot.appendChild(btnsContainer);
	}
	
	this.setupNextQuoteBtn = () => {
		nextQuoteBtn = document.createElement("button");	
		nextQuoteBtn.className = "button large primary";
		nextQuoteBtn.type = "button";
		nextQuoteBtn.innerText = "Next Quote";
	};
	
	this.setupTweetQuoteBtn = () => {
		tweetQuoteBtn = document.createElement("button");
		tweetQuoteBtn.className = "button large primary";
		tweetQuoteBtn.innerText = "Tweet Quote";
	};
	
	this.setNewQuote = () => {
		
	};
	
	this.getRandomOfflineQuote = () => {
		return offlineQuotes[Math.floor(Math.random() * offlineQuotes.length)];
	};

}

const RQMInstance = new RQM();
RQMInstance.initializeRQM();
