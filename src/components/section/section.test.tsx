import React from 'react';
import { render, screen } from '@testing-library/react';
import { Section } from './';
import { SECTIONS_DATA, SectionTypes } from './section.constants';

describe('Section Component', () => {
  it('renders correctly with SectionTypes.HAIR_LOSS section', () => {
    render(<Section section={SectionTypes.HAIR_LOSS} />);
    const topic = screen.getByText(SECTIONS_DATA[SectionTypes.HAIR_LOSS].topic);
    const text = screen.getByText(SECTIONS_DATA[SectionTypes.HAIR_LOSS].text);
    const image = screen.getByRole('img', {
      name: SECTIONS_DATA[SectionTypes.HAIR_LOSS].imageDescription,
    });

    expect(topic).toBeInTheDocument();
    expect(text).toBeInTheDocument();

    expect(image).toHaveAttribute(
      'alt',
      SECTIONS_DATA[SectionTypes.HAIR_LOSS].imageDescription,
    );
  });

  it('renders correctly with SectionTypes.ERECETILE_DISFUNCTION section', () => {
    render(<Section section={SectionTypes.ERECETILE_DISFUNCTION} />);
    const topic = screen.getByText(
      SECTIONS_DATA[SectionTypes.ERECETILE_DISFUNCTION].topic,
    );
    const text = screen.getByText(
      SECTIONS_DATA[SectionTypes.ERECETILE_DISFUNCTION].text,
    );
    const image = screen.getByRole('img', {
      name: SECTIONS_DATA[SectionTypes.ERECETILE_DISFUNCTION].imageDescription,
    });

    expect(topic).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'alt',
      SECTIONS_DATA[SectionTypes.ERECETILE_DISFUNCTION].imageDescription,
    );
  });

  it('renders correctly with reversed prop', () => {
    render(<Section section={SectionTypes.ERECETILE_DISFUNCTION} reversed />);
    const sectionElement = screen.getByTestId('section-content');
    expect(sectionElement).toHaveClass('section section--reversed');
  });

  it('applies reversed style correctly', () => {
    render(<Section section={SectionTypes.HAIR_LOSS} reversed />);
    const sectionElement = screen.getByTestId('section-content');
    expect(sectionElement).toHaveClass('section section--reversed');
  });
});
