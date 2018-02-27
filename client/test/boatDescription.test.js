import React from 'react';
import { shallow, mount, render } from 'enzyme';
import boatDescription from './../components/boatDescription';

test('should render three <div> components', () => {
  const wrapper = shallow(<div/>);
  expect(wrapper.find(div)).to.have.length(3);
});

test('should render boat-description', () => {
  const wrapper = shallow(<div/>);
  expect(wrapper.find('.boat-description')).to.have.length(1);
});

test('should render boat-summary', () => {
  const wrapper = shallow(<div/>);
  expect(wrapper.find('.boat-summary')).to.have.length(1);
});

test('should render boat-owner', () => {
  const wrapper = shallow(<div/>);
  expect(wrapper.find('.boat-owner')).to.have.length(1);
});
