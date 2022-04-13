import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todos app text', () => {
  render(<App />);
  const linkElement = screen.getByText(/todo's app/i);
  expect(linkElement).toBeInTheDocument();
});
