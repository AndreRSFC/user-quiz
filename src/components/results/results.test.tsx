import { render, screen } from '@testing-library/react';
import { Results } from './results.component';
import { REJECTION_DATA, SUCCESS_DATA } from './results.constants';
import userEvent from '@testing-library/user-event';

const mockedSetIsRejectionFalse = jest.fn();

const mockedRouter = jest.fn();

jest.mock('next/navigation', () => {
  const actual = jest.requireActual('next/navigation');

  return {
    ...actual,
    useRouter: jest.fn(() => ({
      push: mockedRouter,
    })),
    useSearchParams: jest.fn(() => ({
      get: jest.fn(),
    })),
    usePathname: jest.fn(),
  };
});

describe('Results Component', () => {
  it('renders the component with rejection message', () => {
    render(
      <Results
        isRejection={true}
        setIsRejectionFalse={mockedSetIsRejectionFalse}
      />,
    );
    expect(
      screen.getByAltText('Image of a doctor with a green background'),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: REJECTION_DATA.button }),
    ).toBeInTheDocument();
    expect(screen.getByText(REJECTION_DATA.title)).toBeInTheDocument();
    expect(screen.getByText(REJECTION_DATA.text)).toBeInTheDocument();
  });

  it('renders the component with non-rejection message', () => {
    render(
      <Results
        isRejection={false}
        setIsRejectionFalse={mockedSetIsRejectionFalse}
      />,
    );
    expect(
      screen.getByAltText('Image of a doctor with a green background'),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: SUCCESS_DATA.button }),
    ).toBeInTheDocument();

    expect(screen.getByText(SUCCESS_DATA.title)).toBeInTheDocument();
    expect(screen.getByText(SUCCESS_DATA.text)).toBeInTheDocument();
  });

  it('handles button click to clear rejection', async () => {
    render(
      <Results
        isRejection={true}
        setIsRejectionFalse={mockedSetIsRejectionFalse}
      />,
    );
    const button = screen.getByRole('button', { name: REJECTION_DATA.button });
    await userEvent.click(button);
    await expect(mockedSetIsRejectionFalse).toHaveBeenCalled();
  });

  it('handles button click to navigate to website', async () => {
    render(
      <Results
        isRejection={false}
        setIsRejectionFalse={mockedSetIsRejectionFalse}
      />,
    );
    const button = screen.getByRole('button', { name: SUCCESS_DATA.button });
    await userEvent.click(button);
    await expect(mockedRouter).toHaveBeenCalledWith('http://www.manual.co');
  });

  it('handles "Back to homepage" link', async () => {
    render(
      <Results
        isRejection={true}
        setIsRejectionFalse={mockedSetIsRejectionFalse}
      />,
    );

    const backLink = screen.getByRole('button', { name: 'Back to homepage' });
    await userEvent.click(backLink);

    await expect(mockedRouter).toHaveBeenCalledWith('/');
  });
});
