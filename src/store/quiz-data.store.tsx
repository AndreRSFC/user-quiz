import { create } from 'zustand';

const quizInitialState = { questions: {} };

export const useQuizStore = create<{
  questions: { [key: string]: string };
  updateQuestions: (question: string, questionValue: string) => void;
  clearQuestions: () => void;
}>((set) => ({
  ...quizInitialState,
  updateQuestions: (question: string, questionValue: string) =>
    set(({ questions }) => ({
      questions: { ...questions, [question]: questionValue },
    })),
  clearQuestions: () => set(quizInitialState),
}));
