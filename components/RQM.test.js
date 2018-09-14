import React from 'react';
import { shallow } from 'enzyme';

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
      it('renders a .quote inside .quote-container', () => {
        expect(wrapper.find('.quote-container .quote')).toHaveLength(1);
      });
      it('renders an .author inside .quote-container', () => {
        expect(wrapper.find('.quote-container .author')).toHaveLength(1);
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
  });
});
