import React from 'react';
import { shallow, mount, render } from 'enzyme';
import boatDescription from './../components/boatDescription';

test('boatDescription renders', () => {
    const wrapper = shallow(
        <Label>boatDescription</Label>
    );
    expect(wrapper).toMatchSnapshot();
});

test('boatSummary renders', () => {
    const wrapper = shallow(
        <Label>boatDescription</Label>
    );
    expect(wrapper).toMatchSnapshot();
});

test('boatOwner renders', () => {
    const wrapper = shallow(
        <Label>boatDescription</Label>
    );
    expect(wrapper).toMatchSnapshot();
});
