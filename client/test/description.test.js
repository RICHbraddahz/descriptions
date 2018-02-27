import React from 'react';
import { shallow, mount, render } from 'enzyme';
import description from './../components/description';

test('should render boatDescription', () => {
    const wrapper = shallow(<div/>);
    expect(wrapper.find('<BoatDescription/>')).to.have.length(1)
});
