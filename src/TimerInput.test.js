import React from 'react';
import { render } from '@testing-library/react';
import TimerInput from './TimerInput';

test('renders learn react link', () => {
  const { getByText } = render(<TimerInput />);
  const linkElement = getByText(/Input your desired time/i);
  expect(linkElement).toBeInTheDocument();
});
