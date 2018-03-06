import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sleepingArrangementList from './../components/sleepingArrangementList';

test('should render one <div> components', () => {
  const wrapper = shallow(<div/>);
  expect(wrapper.find(div)).to.have.length(1);
});
