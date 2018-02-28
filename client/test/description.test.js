import React from 'react';
import { shallow, mount, render } from 'enzyme';
import description from './../components/description';
import amenities from './../components/amenities';
import sleepingArangement from './../components/sleepingArangement';
import boatRules from './../components/boatRules';
import sleepingArangementList from './../components/sleepingArangementList';

test('should render boatDescription', () => {
    const wrapper = shallow(<div/>);
    expect(wrapper.find('<BoatDescription/>')).to.have.length(1)
});

test('should render amenities', () => {
    const wrapper = shallow(<div/>);
    expect(wrapper.find('<Amenities/>')).to.have.length(1)
});

test('should render sleepingArangement', () => {
    const wrapper = shallow(<div/>);
    expect(wrapper.find('<SleepingArangement/>')).to.have.length(1)
});

test('should render boatRules', () => {
    const wrapper = shallow(<div/>);
    expect(wrapper.find('<BoatRules/>')).to.have.length(1)
});
