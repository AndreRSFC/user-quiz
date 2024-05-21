import { render, screen } from '@testing-library/react';
import { QuizHeader } from './quiz-header.component';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

describe('QuizHeader Component', () => {
  it('calls the goBack function when the back button is clicked', () => {
    const goBackMock = jest.fn();

    render(<QuizHeader goBack={goBackMock} />);

    const backButton = screen.getByRole('button');
    userEvent.click(backButton);

    expect(goBackMock).toHaveBeenCalledTimes(1);
  });
});
