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
		
	};
	
	this.setupNextQuoteBtn = () => {
		
	};
	
}

const RQMInstance = new RQM();
RQMInstance.initializeRQM();
