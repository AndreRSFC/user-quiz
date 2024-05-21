import { useSearchParams, useRouter } from 'next/navigation';

export const isHtmlElement = (str: string) => {
  const regex = /<[^>]+>/;
  return regex.test(str);
};

const useStepNavigation = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const questionStep = searchParams?.get('questionStep') || '0';

  const goBack = () => {
    const currentStep = parseInt(questionStep);

    if (!currentStep || currentStep < 1) {
      router.push('/');
    } else {
      router.push(`/quiz?questionStep=${currentStep - 1}`);
    }
  };

  const goForward = (lastStep: number, isRejection: boolean) => {
    if (isRejection) {
      router.push('/results');
      return;
    }

    const currentStep = parseInt(questionStep);

    if (currentStep === lastStep) {
      router.push('/results');
    } else {
      router.push(`/quiz/?questionStep=${currentStep + 1}`);
    }
  };

  return { goBack, goForward };
};

export default useStepNavigation;
