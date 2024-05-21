import { create } from 'zustand';

export const useQuizStore = create<{
  questions: { [key: string]: string };
  updateQuestions: (question: string, questionValue: string) => void;
  clearQuestions: () => void;
}>((set) => ({
  questions: {},
  updateQuestions: (question: string, questionValue: string) =>
    set(({ questions }) => ({
      questions: { ...questions, [question]: questionValue },
    })),
  clearQuestions: () => ({ questions: {}, isRejected: false }),
}));
