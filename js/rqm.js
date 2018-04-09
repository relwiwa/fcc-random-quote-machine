function RQM() {
	var RQMRoot = null;
	var quoteContainer = null;
	var nextQuoteBtn = null;

	this.initializeRQM = () => {
		RQMRoot = document.querySelector('#rqm-root');
		this.setupQuoteContainer(
			function containerDiv() {
				let container = document.createElement("div");
				container.className = "continaer callout";
				container.innerHTML = "<p>hello world</p>";
				RQMRoot.appendChild(conatiner);
			}
		);
		this.setupNextQuoteBtn();
	};
	
	this.setupQuoteContainer = () => {};
	
	this.setupNextQuoteBtn = () => {
		
	};
	
}

const RQMInstance = new RQM();
RQMInstance.initializeRQM();
