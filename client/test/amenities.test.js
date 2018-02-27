import React from 'react';
import { shallow, mount, render } from 'enzyme';
import amenities from './../components/amenities';

test('should render two <div> components', () => {
  const wrapper = shallow(<div/>);
  expect(wrapper.find(div)).to.have.length(2);
});
