import * as React from 'react';
import {render, screen} from '@testing-library/react';

import {App} from './App';

test('renders the App', () => {
  render(<App />);
  const linkElement = screen.getByText(/George/i);
  expect(linkElement).toBeInTheDocument();
});
