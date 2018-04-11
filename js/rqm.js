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
		this.setupBtnsContainer();
		this.setNewQuote();
	};
	
	this.setupQuoteContainer = () => {
		quoteContainer = document.createElement("div");
		quoteContainer.className = "cell callout";
		quoteContainer.innerHTML = `<p>${this.getRandomOfflineQuote()}</p>`;
		RQMRoot.appendChild(quoteContainer);
	};

	this.setupBtnsContainer = () => {
		btnsContainer = document.createElement("div");
		btnsContainer.className = "cell button-group expanded stacked-for-small";
		nextQuoteBtn = this.createButton("warning large", "New Quote");
		tweetQuoteBtn = this.createButton("primary large", "Tweet Quote");
		btnsContainer.appendChild(tweetQuoteBtn);
		btnsContainer.appendChild(nextQuoteBtn);
		RQMRoot.appendChild(btnsContainer);
	}
	
	this.createButton = (btnClasses, btnText) => {
		const newBtn = document.createElement("a");
		newBtn.className = `button ${btnClasses}`;
		newBtn.innerText = btnText;
		return newBtn;
	};
	
	this.setNewQuote = () => {
		document.querySelector(".button.warning.large").addEventListener("click", function() {
			quoteContainer.innerHTML = offlineQuotes[Math.floor(Math.random() * offlineQuotes.length)];
		});
	};
	
	this.getRandomOfflineQuote = () => {
		return offlineQuotes[Math.floor(Math.random() * offlineQuotes.length)];
	};

}

const RQMInstance = new RQM();
RQMInstance.initializeRQM();
