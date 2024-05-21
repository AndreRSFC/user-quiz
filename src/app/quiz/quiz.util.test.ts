import { renderHook, act } from '@testing-library/react';
import { useStepNavigation, isHtmlElement } from './quiz.util';

const mockedRouter = jest.fn();
let mockedQuery = { questionStep: '2' };
let mockedParam = 2;

jest.mock('next/navigation', () => {
  const actual = jest.requireActual('next/navigation');

  return {
    ...actual,
    useRouter: jest.fn(() => ({
      push: mockedRouter,
      query: mockedQuery,
    })),
    useSearchParams: jest.fn(() => ({
      get: () => mockedParam,
    })),
    usePathname: jest.fn(),
  };
});

describe('isHtmlElement', () => {
  it('returns true if the string contains HTML tags', () => {
    expect(isHtmlElement('<div>test</div>')).toBe(true);
  });

  it('returns false if the string does not contain HTML tags', () => {
    expect(isHtmlElement('test')).toBe(false);
  });
});

describe('useStepNavigation', () => {
  it('handles the goBack function correctly', async () => {
    mockedQuery = { questionStep: '2' };

    const { result } = renderHook(() => useStepNavigation());
    act(() => {
      result.current.goBack();
    });

    expect(mockedRouter).toHaveBeenCalledWith('/quiz?questionStep=1');
  });

  it('handles the goBack function correctly for the first step', async () => {
    mockedQuery = { questionStep: '0' };
    mockedParam = 0;

    const { result } = renderHook(() => useStepNavigation());
    act(() => {
      result.current.goBack();
    });

    expect(mockedRouter).toHaveBeenCalledWith('/');
  });

  it('handles the goForward function and navigates to rejection step', async () => {
    mockedQuery = { questionStep: '2' };
    mockedParam = 2;

    const { result } = renderHook(() => useStepNavigation());
    act(() => {
      result.current.goForward(3, true);
    });

    expect(mockedRouter).toHaveBeenCalledWith('/quiz/?questionStep=2');
  });

  it('handles the goForward function and navigates to next step', async () => {
    mockedQuery = { questionStep: '1' };

    const { result } = renderHook(() => useStepNavigation());
    act(() => {
      result.current.goForward(3, false);
    });

    expect(mockedRouter).toHaveBeenCalledWith('/quiz/?questionStep=3');
  });
});
