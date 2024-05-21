import { useQuizStore } from '@/store/quiz-data.store';
import { useSearchParams, useRouter } from 'next/navigation';

export const isHtmlElement = (str: string) => {
  const regex = /<[^>]+>/;
  return regex.test(str);
};

export const useStepNavigation = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const questionStep = searchParams?.get('questionStep') || '0';
  const clearQuestions = useQuizStore((state) => state.clearQuestions);

  const goBack = () => {
    const currentStep = parseInt(questionStep);

    if (!currentStep || currentStep < 1) {
      clearQuestions();
      router.push('/');
    } else {
      router.push(`/quiz?questionStep=${currentStep - 1}`);
    }
  };

  const goForward = (lastStep: number, isRejection: boolean) => {
    const currentStep = parseInt(questionStep);

    if (isRejection) {
      router.push(`/quiz/?questionStep=${currentStep}`);
      return;
    } else {
      router.push(`/quiz/?questionStep=${currentStep + 1}`);
    }
  };

  return { goBack, goForward };
};
