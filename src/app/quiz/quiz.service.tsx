import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useQuizData = () => {
  return useSWR('/api/quiz-data', fetcher);
};

export { useQuizData };