import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './';
import { FOOTER_LINKS } from './footer.constants';

import '@testing-library/jest-dom';

describe('Footer Component', () => {
  it('renders footer links and checks link URLs', () => {
    render(<Footer />);

    FOOTER_LINKS.forEach((column) => {
      expect(screen.getByText(column.name)).toBeInTheDocument();
      column.items.forEach((item) => {
        const linkElement = screen.getByRole('link', { name: item.name });
        expect(linkElement).toHaveAttribute('href', item.link);
      });
    });
  });

  it('displays the current year in the copyright text', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(`© ${year} Manual. All rights reserverd`),
    ).toBeInTheDocument();
  });
});
