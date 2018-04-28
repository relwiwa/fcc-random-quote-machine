function RQM() {
	let RQMRoot = null;
	let quoteContainer = null;
	let nextQuoteBtn = null;
	let tweetQuoteBtn = null;
	let btnsContainer = null;
	const offlineQuotes = ['Hello World', 'Olá Mundo', 'Hallo Welt'];
	const H = new Helper();

	this.initializeRQM = () => {
		RQMRoot = document.querySelector('#rqm-root');
		this.setupQuoteContainer();
		this.setupBtnsContainer();
	};
	
	this.setupQuoteContainer = () => {
		quoteContainer = document.createElement("div");
		quoteContainer.className = "cell callout";
		this.setRandomOfflineQuote();
		RQMRoot.appendChild(quoteContainer);
	};

	this.setupBtnsContainer = () => {
		btnsContainer = document.createElement("div");
		btnsContainer.className = "cell button-group expanded stacked-for-small";
		nextQuoteBtn = H.createButton("warning large", "New Quote");
		H.generalAddEventListener("click", nextQuoteBtn, () => {
			this.setRandomOnlineQuote();
		});
		tweetQuoteBtn = H.createButton("primary large", "Tweet Quote");
		btnsContainer.appendChild(tweetQuoteBtn);
		btnsContainer.appendChild(nextQuoteBtn);
		RQMRoot.appendChild(btnsContainer);
	}
			
	this.setNewQuote = (newQuote) => {
		quoteContainer.innerHTML = `<p>${newQuote}</p>`;		
	};
	
	this.setRandomOfflineQuote = () => {
		this.setNewQuote(H.getRandomElement(offlineQuotes));
	};
	
	this.setRandomOnlineQuote = () => {
		this.setNewQuote(H.getRandomElement(offlineQuotes));		
	}
}

function Helper() {
	this.getRandomElement = (array) => {
		return array[Math.floor(Math.random() * array.length)];
	};
	
	this.createButton = (btnClasses, btnText) => {
		const newBtn = document.createElement("a");
		newBtn.className = `button ${btnClasses}`;
		newBtn.innerText = btnText;
		return newBtn;
	};

	this.generalAddEventListener = (eventType, element, callback) => {
		element.addEventListener(eventType, callback);
	}
}

const RQMInstance = new RQM();
RQMInstance.initializeRQM();
