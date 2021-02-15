import { shallow, mount, render } from 'enzyme';
import React from 'react';
import AboutWords from '../client/src/components/AboutWords.jsx';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure ({ adapter: new Adapter() });


let wrapper = shallow(<AboutWords />);

describe('AboutWords', () => {
  it('Should show the word About', () => {
    expect(wrapper.find('div').text()).toEqual('About')
  })
});
