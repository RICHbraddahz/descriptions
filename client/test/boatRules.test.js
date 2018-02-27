import React from 'react';
import { shallow, mount, render } from 'enzyme';
import boatRules from './../components/boatRules';

test('should render one <div> components', () => {
  const wrapper = shallow(<div/>);
  expect(wrapper.find(div)).to.have.length(1);
});
