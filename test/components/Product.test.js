import React from 'react';
import {
  shallow
} from 'enzyme';
import SizeChart from '../../client/src/components/SizeChart';

describe('<SizeChart />', () => {
  test('Should exist', () => {
    const wrapper = shallow( < SizeChart / > );
    expect(wrapper.exists('td')).toBe(true);
  });
});
