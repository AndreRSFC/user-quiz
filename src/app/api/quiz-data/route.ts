import QUIZ_DATA from './data.json';

export const GET = async () => {
  return Response.json(QUIZ_DATA);
};
