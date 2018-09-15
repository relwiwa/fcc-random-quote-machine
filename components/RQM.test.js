import { shallow } from 'enzyme';
import React from 'react';

import offlineQuotes from '../data/offlineQuotes';
import RQM from './RQM';

describe('<RQM>', () => {
  
  let wrapper;

  describe('when rendering initially', () => {
    beforeEach(function() {
      wrapper = shallow(<RQM />);
    });
    describe('concerning its child elements', () => {
      it('renders a .quote-container', () => {
        expect(wrapper.find('.quote-container')).toHaveLength(1);
      });
      it('renders a .quote-text inside .quote-container', () => {
        expect(wrapper.find('.quote-container .quote-text')).toHaveLength(1);
      });
      it('renders a .quote-author inside .quote-container', () => {
        expect(wrapper.find('.quote-container .quote-author')).toHaveLength(1);
      });
      it('renders a .tweet-quote IconButton', () => {
        expect(wrapper.find('IconButton.tweet-quote')).toHaveLength(1);
      });
      it('renders a .new-quote IconButton', () => {
        expect(wrapper.find('IconButton.new-quote')).toHaveLength(1);
      });
      it('renders an .api-reference', () => {
        expect(wrapper.find('.api-reference')).toHaveLength(1);
      });
    });
    describe('concerning state setup and usage', () => {
      it('sets quote to one of the quotes from the OfflineQuotes array', () => {
        expect(offlineQuotes).toContainEqual(expect.objectContaining(wrapper.state().quote));
      });
      it('sets up RQM.offlineQuotesAvailable', () => {
        expect(wrapper.instance().offlineQuotesAvailable).toBeDefined();
      });
      it('removes quote that was used for state from offlineQuotesAvailable', () => {
        expect(wrapper.instance().offlineQuotesAvailable.length).toBe(offlineQuotes.length - 1);
      });
      it('sets quoteText from state into .quote-text', () => {
        expect(wrapper.find('.quote-text').props().dangerouslySetInnerHTML.__html).toEqual(wrapper.state().quote.quoteText);
      });
      it('sets quoteAuthor from state into .quote-author', () => {
        expect(wrapper.find('.quote-author').props().dangerouslySetInnerHTML.__html).toEqual(wrapper.state().quote.quoteAuthor);
      });
    });
  });
  describe('when user clicks on .new-quote button', () => {
    const regExpTags = /[<[a-zA-Z0-9]+>/;
    let onClickPromise;
    beforeEach(function() {
      wrapper = shallow(<RQM />);
      onClickPromise = wrapper.find('.new-quote').props().onClick();
    });
    describe('concerning replacing old with new quote from API', () => {
      it('sets .quote-disappear on .quote-container', () => {
        expect(wrapper.find('.quote-container.quote-disappear')).toHaveLength(1);
      });
      it('sets a new quote author from the api into state.quote.quoteAuthor', () => {
        expect.assertions(1);
        return onClickPromise.then(data => {
          expect(wrapper.state().quote.quoteAuthor).toEqual(data[0].title);
        });
      });
      it('sets a new quote text from the api into state.quote.quoteText', () => {
        expect.assertions(1);
        return onClickPromise.then(data => {
          expect(wrapper.state().quote.quoteText).toEqual(data[0].content);
        });
      });
      it('removes tags from quoteText before placing it inside .quote-text', () => {
        expect.assertions(1);
        return onClickPromise.then(data => {
          expect(wrapper.find('.quote-text').props().dangerouslySetInnerHTML.__html).toEqual(expect.not.stringMatching(regExpTags));
        });
      });
      it('removes tags from quoteAuthor before placing it inside .quote-author', () => {
        expect.assertions(1);
        return onClickPromise.then(data => {
          expect(wrapper.find('.quote-author').props().dangerouslySetInnerHTML.__html).toEqual(expect.not.stringMatching(regExpTags));
        });
      });
      it('sets .quote-appear on .quote-container after getting new quote', () => {
        return onClickPromise.then(data => {
          expect(wrapper.find('.quote-container.quote-appear')).toHaveLength(1);
        });
      });
    });
  });
});
