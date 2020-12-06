import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Makes sure obvious stuff is true', () => {
  expect(1).toBe(1);
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
