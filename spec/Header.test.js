import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Header from '../client/src/components/Header.jsx';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure ({ adapter: new Adapter() });


let wrapper = shallow(<Header />);

describe('Header', () => {
  it('Should show the word Header', () => {
    expect(wrapper.find('h1').text()).toEqual('Header')
  })
});
