import { render } from '@testing-library/react';
import { Radio } from './';

describe('Radio Component', () => {
  it('renders correctly', () => {
    const { queryByLabelText } = render(
      <Radio
        checked={false}
        name="testRadio"
        id="test1"
        value="test1"
        display="Test Radio 1"
      />,
    );

    expect(queryByLabelText('Test Radio 1')).toBeInTheDocument();
  });

  it('is checked when the checked prop is true', () => {
    const { getByRole } = render(
      <Radio
        checked={true}
        name="testRadio"
        id="test1"
        value="test1"
        display="Test Radio 1"
      />,
    );

    expect(getByRole('radio')).toBeChecked();
  });
});
