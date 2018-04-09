function RQM() {
	var RQMRoot = null;
	var quoteContainer = null;
	var nextQuoteBtn = null;
	var offlineQuotes = ['Hello World', 'Olá Mundo', 'Hallo Welt'];

	this.initializeRQM = () => {
		RQMRoot = document.querySelector('#rqm-root');
		this.setupQuoteContainer();
		this.setupNextQuoteBtn();
	};
	
	this.setupQuoteContainer = () => {
		let container = document.createElement("div");
		container.className = "cell callout";
		container.innerHTML = `<p>${this.getRandomOfflineQuote()}</p>`;
		RQMRoot.appendChild(container);
	};
	
	this.setupNextQuoteBtn = () => {
		
	};
	
	this.getRandomOfflineQuote = () => {
		return offlineQuotes[Math.floor(Math.random() * offlineQuotes.length)];
	};

}

const RQMInstance = new RQM();
RQMInstance.initializeRQM();
