import { create } from 'zustand';

export const useQuizStore = create<{
  isRejected: boolean;
  questions: { [key: string]: string };
  updateQuestions: (question: string, questionValue: string) => void;
}>((set) => ({
  isRejected: false,
  questions: {},
  updateQuestions: (question: string, questionValue: string) =>
    set(({ questions }) => ({
      questions: { ...questions, [question]: questionValue },
    })),
}));
