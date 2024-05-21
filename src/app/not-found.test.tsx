import { render, screen } from '@testing-library/react';
import NotFound from './not-found';
import userEvent from '@testing-library/user-event';

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

describe('NotFound page', () => {
  it('renders correctly', () => {
    render(<NotFound />);
    expect(screen.getByText('Something has gone wrong')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Looks like we’ve taken a wrong turn. Shall we back up and give that another go?',
      ),
    ).toBeInTheDocument();

    expect(screen.getByText('Back to Home Page')).toBeInTheDocument();
    expect(screen.getByText('Back to Manual')).toBeInTheDocument();
  });

  it('navigates to the home page when the "Back to Home Page" button is clicked', async () => {
    render(<NotFound />);
    const homePageButton = screen.getByText('Back to Home Page');
    await userEvent.click(homePageButton);
    await expect(mockedRouter).toHaveBeenCalledWith('/');
  });

  it('navigates to the Manual site when the "Back to Manual" button is clicked', async () => {
    render(<NotFound />);

    const manualButton = screen.getByText('Back to Manual');
    await userEvent.click(manualButton);
    await expect(mockedRouter).toHaveBeenCalledWith('http://www.manual.co');
  });

  it('navigates to the Manual site when the "goback" button is clicked', async () => {
    render(<NotFound />);

    const goBack = screen.getByLabelText('Go to previous page');
    await userEvent.click(goBack);
    await expect(mockedRouter).toHaveBeenCalledWith('/');
  });
});
