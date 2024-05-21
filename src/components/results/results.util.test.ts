import { getResultsContent } from './results.util';
import { REJECTION_DATA, SUCCESS_DATA } from './results.constants';

describe('getResultsContent', () => {
  it('returns REJECTION_DATA when isRejection is true', () => {
    expect(getResultsContent(true)).toBe(REJECTION_DATA);
  });

  it('returns SUCCESS_DATA when isRejection is false', () => {
    expect(getResultsContent(false)).toBe(SUCCESS_DATA);
  });
});
