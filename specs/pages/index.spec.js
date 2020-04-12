import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import HomePage from '~/pages/index';

describe('<HomePage/>', () => {
  it('should render a welcome text', () => {
    const page = mount(<HomePage />);
    expect(page.text()).to.eq('Hello world');
  });
});