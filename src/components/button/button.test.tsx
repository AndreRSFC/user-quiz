import { render, fireEvent, screen } from '@testing-library/react';
import { Button, ButtonType } from './';

describe('Button Component', () => {
  it('renders the button with children', () => {
    render(<Button styleType={ButtonType.PRIMARY}>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies the default style when no styleType is provided', () => {
    render(<Button>Default Style</Button>);
    expect(screen.getByText('Default Style')).toHaveClass(
      'button button_primary',
    );
  });

  it('applies the specified styleType', () => {
    render(<Button styleType={ButtonType.SECONDARY}>Secondary Style</Button>);
    expect(screen.getByText('Secondary Style')).toHaveClass(
      'button button_secondary',
    );
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText('Disabled')).toBeDisabled();
  });

  it('handles onClick event', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Clickable</Button>);
    fireEvent.click(screen.getByText('Clickable'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
