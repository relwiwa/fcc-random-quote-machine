import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';
import QuoteContainer from './QuoteContainer';

describe('<App>', () => {
  
  let wrapper;
  beforeEach(function() {
    wrapper = shallow(<App />);
  });

  describe(`concerning it's <QuoteContainer> child component`, () => {
    it('should render a <QuoteContainer>', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.containsMatchingElement(<QuoteContainer />)).toEqual(true);
    });
    it('should pass a "quote" prop to <QuoteContainer>', () => {
      expect(wrapper.find('QuoteContainer').props().quote).toBeDefined();
    });
    it('should pass an "author" prop to <QuoteContainer>', () => {
      expect(wrapper.find('QuoteContainer').props().author).toBeDefined();
    });
  });
});