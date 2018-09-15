import React from 'react';
import { shallow } from 'enzyme';

import offlineQuotes from '../data/offlineQuotes';
import RQM from './RQM';

describe('<RQM>', () => {
  
  let wrapper;
  beforeEach(function() {
    wrapper = shallow(<RQM />);
  });

  describe('when rendering initially', () => {
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
      it('sets quoteText from state into .quote-text', () => {
        expect(wrapper.find('.quote-text').text()).toEqual(wrapper.state().quote.quoteText);
      });
      it('sets quoteAuthor from state into .quote-author', () => {
        expect(wrapper.find('.quote-author').text()).toEqual(wrapper.state().quote.quoteAuthor);
      });
    });
  });
});
