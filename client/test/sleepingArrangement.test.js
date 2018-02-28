import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sleepingArangement from './../components/sleepingArangement';

test('should render one <h5> components', () => {
  const wrapper = shallow(<div/>);
  expect(wrapper.find(h5)).to.have.length(2);
});
