import React from 'react';
import './App.css';

import QuoteContainer from './QuoteContainer';
import Button from './Button';

/*  Let's use a functional component for now according to the second phase of
    "Thinking in React", where we don't have state yet, but only build a static
    version of our app and put in props manually */
const App = (props) =>  {
  return (
    <div className="rqm grid-container">
      <div className="grid-x grid-padding-x">
        <h1 className="cell">Random Quote Machine</h1>
      </div>
      <QuoteContainer 
        author={"Josue"} 
        quote={"Hello world"} 
        />
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
