import { REJECTION_DATA, SUCCESS_DATA } from './results.constants';

export const getResultsContent = (isRejection: boolean) => {
  return isRejection ? REJECTION_DATA : SUCCESS_DATA;
};
