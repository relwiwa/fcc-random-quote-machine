import React from 'react';
import { shallow } from 'enzyme';

import QuoteContainer from './QuoteContainer';

describe('<QuoteContainer>', () => {
  
  let wrapper;
  beforeEach(function() {
    wrapper = shallow(<QuoteContainer
      quote="Hello Joe"
      author="Jay"
    />);
  });
    it('should render a .quote-container', () => {
      expect(wrapper.find('.quote-container')).toHaveLength(1);
    });
    it('should render a .quote', () => {
      expect(wrapper.find('.quote')).toHaveLength(1);
    });
    it('should render a .author', () => {
      expect(wrapper.find('.author')).toHaveLength(1);
    });
    it('should render props.quote inside of .quote', () => {
      expect(wrapper.find('.quote').text()).toEqual('Hello Joe');
    });
    it('should render props.author inside of .author', () => {
      expect(wrapper.find('.author').text()).toEqual('Jay');
    });
  });
