function RQM() {
	var RQMRoot = null;
	var quoteContainer = null;
	var nextQuoteBtn = null;

	this.initializeRQM = () => {
		RQMRoot = document.querySelector('#rqm-root');
		this.setupQuoteContainer();
		this.setupNextQuoteBtn();
	};
	
	this.setupQuoteContainer = () => {
		let container = document.createElement("div");
		container.className = "cell callout";
		container.innerHTML = "<p>hello world</p>";
		RQMRoot.appendChild(container);
	};
	
	this.setupNextQuoteBtn = () => {
		
	};
	
}

const RQMInstance = new RQM();
RQMInstance.initializeRQM();
