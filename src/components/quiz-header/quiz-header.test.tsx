import { render, screen } from '@testing-library/react';
import { QuizHeader } from './quiz-header.component';
import userEvent from '@testing-library/user-event';

describe('QuizHeader Component', () => {
  it('calls the goBack function when the back button is clicked', async () => {
    const goBackMock = jest.fn();

    render(<QuizHeader goBack={goBackMock} />);

    const backButton = screen.getByRole('button');
    await userEvent.click(backButton);

    await expect(goBackMock).toHaveBeenCalledTimes(1);
  });
});
