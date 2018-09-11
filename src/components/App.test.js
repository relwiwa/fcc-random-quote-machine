import React from 'react';
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
      expect(wrapper.containsMatchingElement(<QuoteContainer />)).toEqual(true);
    });
    it('should pass a "quote" prop to <QuoteContainer>', () => {
      expect(wrapper.find('QuoteContainer').props().quote).toBeDefined();
    });
    it('should pass an "author" prop to <QuoteContainer>', () => {
      expect(wrapper.find('QuoteContainer').props().author).toBeDefined();
    });
  });
  describe(`concerning it's <Button> child components`, () => {
    it('should render two <Button> components', () => {
      expect(wrapper.find('Button')).toHaveLength(2);
    });
    it('should render a .twitter button component with "text" and "icon" prop', () => {
      expect(wrapper.find('Button.twitter')).toHaveLength(1);
      expect(wrapper.find('Button.twitter').props().text).toBeDefined();
      expect(wrapper.find('Button.twitter').props().icon).toBeDefined();
    });
    it('should render a .new-quote button component with "text" and "icon" prop', () => {
      expect(wrapper.find('Button.new-quote')).toHaveLength(1);
      expect(wrapper.find('Button.new-quote').props().text).toBeDefined();
      expect(wrapper.find('Button.new-quote').props().icon).toBeDefined();
    });
  });

});