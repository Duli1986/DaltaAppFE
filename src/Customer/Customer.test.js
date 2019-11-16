import React from 'react';
import { mount } from 'enzyme'
import Customer from "./Customer";

it('renders without crashing', () => {
  mount(<Customer />);
});
