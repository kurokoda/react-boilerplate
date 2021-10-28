import { render, screen } from '@testing-library/react';
import { HomePage } from './homePage';

test('renders learn react link', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/Welcome to the home page!/i);
  expect(linkElement).toBeInTheDocument();
});
