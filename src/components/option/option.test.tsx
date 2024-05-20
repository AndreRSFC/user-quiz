import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Option } from './';

describe('Option Component', () => {
  const mockSetSelected = jest.fn();

  it('renders Radio component when displayIsHtmlElement is false', () => {
    render(
      <Option
        value="option1"
        selectedOption="option1"
        setSelected={mockSetSelected}
        display="Radio Display"
        type="choice-radio"
        displayIsHtmlElement={false}
      />,
    );

    expect(screen.getByLabelText('Radio Display')).toBeInTheDocument();
    expect(screen.getByLabelText('Radio Display')).toBeChecked();
  });

  it('renders HTML content when displayIsHtmlElement is true', () => {
    const htmlContent = '<div>HTML Content</div>';
    render(
      <Option
        value="option2"
        selectedOption=""
        setSelected={mockSetSelected}
        display={htmlContent}
        type="checkbox"
        displayIsHtmlElement={true}
      />,
    );

    expect(screen.getByText('option2')).toBeInTheDocument();
  });

  it('renders HTML content when displayIsHtmlElement is true and is selected', () => {
    const htmlContent = '<div>HTML Content</div>';
    render(
      <Option
        value="option2"
        selectedOption="option2"
        setSelected={mockSetSelected}
        display={htmlContent}
        type="checkbox"
        displayIsHtmlElement={true}
      />,
    );

    const imageContainer = screen.getByTestId('option-image-container');

    expect(imageContainer).toBeInTheDocument();
    expect(imageContainer).toHaveClass('option_imageContainer--checked');
  });

  it('calls setSelected on click', async () => {
    render(
      <Option
        value="option1"
        selectedOption=""
        setSelected={mockSetSelected}
        display="Click Test"
        type="radio"
        displayIsHtmlElement={false}
      />,
    );

    const radioElement = screen.getByLabelText('Click Test');
    await userEvent.click(radioElement);

    await expect(mockSetSelected).toHaveBeenCalledWith('option1');
  });
});
