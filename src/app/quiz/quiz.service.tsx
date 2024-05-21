import useSWR from 'swr';

const fetcher = (...args: [input: RequestInfo, init?: RequestInit]) =>
  fetch(...args).then((res) => res.json());

const useQuizData = () => {
  return useSWR('/api/quiz-data', fetcher);
};

export { useQuizData };
