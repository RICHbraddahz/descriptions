import React from 'react';
import { shallow, mount, render } from 'enzyme';
import amenities from './../components/amenities';

test('render a label', () => {
    const wrapper = shallow(
        <Label>Amenities</Label>
    );
    expect(wrapper).toMatchSnapshot();
});
