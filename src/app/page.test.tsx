import { render, screen } from '@testing-library/react';
import Home from './page'; // Update the path as necessary
import {
  SECTIONS_DATA,
  SectionTypes,
} from '@/components/section/section.constants';

describe('Home Page', () => {
  it('renders the home page and its components', () => {
    render(<Home />);

    const link = screen.getByRole('link', { name: 'Take the quiz' });

    expect(link).toHaveAttribute('href', '/quiz');
    expect(link).toHaveTextContent('Take the quiz');

    expect(screen.getByText('What we can help with')).toBeInTheDocument();
  });

  it('checks if all sections are rendered correctly', () => {
    render(<Home />);

    expect(
      screen.getByRole('img', {
        name: SECTIONS_DATA[SectionTypes.ERECETILE_DISFUNCTION]
          .imageDescription,
      }),
    ).toHaveAttribute(
      'alt',
      SECTIONS_DATA[SectionTypes.ERECETILE_DISFUNCTION].imageDescription,
    );

    expect(
      screen.getByRole('img', {
        name: SECTIONS_DATA[SectionTypes.HAIR_LOSS].imageDescription,
      }),
    ).toHaveAttribute(
      'alt',
      SECTIONS_DATA[SectionTypes.HAIR_LOSS].imageDescription,
    );
  });

  it('ensures the footer is rendered with dynamic year', () => {
    const year = new Date().getFullYear();
    render(<Home />);
    expect(screen.getByTestId('footer_copyrightText').textContent).toBe(
      `© ${year} Manual. All rights reserverd`,
    );
  });
});
