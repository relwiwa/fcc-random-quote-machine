import React from 'react';
import './App.css';

import QuoteContainer from './QuoteContainer';
import Button from './Button';

<<<<<<< HEAD
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			quote: 'hello World',
      quotes: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, excepturi.'],
			author: 'Josue',
			twitter: {
				text: 'Twitter',
				icon: 'icon'
			},
      newQuote: {
        text: 'New Quote',
        icon: 'icon'
      },
      buttons: ['Twitter', 'New Quote']
		};
	}
  render() {
    return (
      <div className="rqm grid-container">
        <div className="grid-x grid-padding-x">
          <h1 className="cell text-center">Random Quote Machine</h1>
        </div>
        <QuoteContainer author={this.state.author} quote={this.state.quote} />
        <div className="primary expanded button-group">
          <Button text={this.state.newQuote.text} icon={this.state.newQuote.icon} className="twitter" />
          <Button text={this.state.twitter.text} icon={this.state.twitter.icon} className="new-quote" />
        </div>
=======
/*  Let's use a functional component for now according to the second phase of
    "Thinking in React", where we don't have state yet, but only build a static
    version of our app and put in props manually */
const App = (props) =>  {
  return (
    <div className="rqm grid-container">
      <div className="grid-x grid-padding-x">
        <h1 className="cell">Random Quote Machine</h1>
>>>>>>> c45477e983da6d642b2cc7ce5467d5229106b280
      </div>
      <QuoteContainer author={"Josue"} quote={"Hello world"} />
      <Button
        text="New Quote"
        icon="this should be the name of a font-awesome icon"
        className="twitter"
      />
      <Button
        text={"Tweet Quote"}
        icon="this should be the name of a font-awesome icon"
        className="new-quote"
      />
    </div>
  );
};

export default App;
