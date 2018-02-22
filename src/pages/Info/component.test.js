import React from 'react';
import { mount } from 'enzyme';

import Info from './component';

test('should render correctly', () => {
  const component = mount(<Info />);

  expect(component).toMatchSnapshot();
});
