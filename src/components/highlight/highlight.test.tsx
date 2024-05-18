import React from 'react';
import { render, screen } from '@testing-library/react';
import { Highlight } from './index';

describe('Highlight Component', () => {
  it('renders the highlight component correctly', () => {
    render(<Highlight />);
    const title = screen.getByRole('heading', { level: 1 });
    const description = screen.getByText(
      'We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.',
    );
    const link = screen.getByRole('link', { name: 'Take the quiz' });

    expect(title).toHaveTextContent('Be good to yourself');
    expect(description).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/quiz');
    expect(link).toHaveTextContent('Take the quiz');
  });
});
