import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders weather header', () => {
  render(<App />);
  const linkElement = screen.getByText(/weather/i);
  expect(linkElement).toBeInTheDocument();
});
