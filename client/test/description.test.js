import React from 'react';
import { shallow, mount, render } from 'enzyme';
import description from './../components/description';

test('boatDescription renders', () => {
    const wrapper = shallow(
        <Label>Description</Label>
    );
    expect(wrapper).toMatchSnapshot();
});
