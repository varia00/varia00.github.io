import { render, screen } from '@testing-library/react';
import App from './App';

// default test built by create-react-app, currently fails
// we should probably make tests of our own
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
