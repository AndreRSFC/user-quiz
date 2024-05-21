'use client';
import { Suspense, useEffect, useMemo, useState } from 'react';
import styles from './quiz.module.css';
import { Option } from '@/components/option';
import useStepNavigation, { isHtmlElement } from './quiz.util';
import { useQuizData } from './quiz.service';
import { useSearchParams } from 'next/navigation';
import { useQuizStore } from '@/store/quiz-data.store';
import { SelectedOptionModel } from './quiz.models';
import { Button } from '@/components/button';
import { QuizHeader } from '@/components/quiz-header';
import { Results } from '@/components/results';

const Quiz = () => {
  const { data } = useQuizData();
  const [isRejection, setIsRejection] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectedOptionModel>({
    value: null,
    isRejection: false,
  });
  const updateQuestions = useQuizStore((state) => state.updateQuestions);

  const searchParams = useSearchParams();
  const questionStep = searchParams?.get('questionStep') || '0';
  const { goBack, goForward } = useStepNavigation();

  const questions = useQuizStore((state) => state.questions);

  const showResults = useMemo(
    () => parseInt(questionStep) > data?.questions?.length - 1,
    [data, questionStep],
  );

  useEffect(() => {
    if (questions?.[questionStep]) {
      setSelectedOption({
        value: questions?.[questionStep],
        isRejection: false,
      });
    }
  }, [questionStep, questions]);

  if (!data) return null;

  const { question, options, type } = data?.questions?.[questionStep] || {};
  const displayIsHtmlElement = isHtmlElement(options?.[0].display);

  return (
    <div className={styles.quiz}>
      <QuizHeader goBack={goBack} />
      {showResults || isRejection ? (
        <Results
          isRejection={isRejection}
          setIsRejectionFalse={() => setIsRejection(false)}
        />
      ) : (
        <div className={styles.quiz_content}>
          <h1 className={styles.quiz_title}>{question}</h1>
          <div
            className={`${styles.quiz_optionsContainer} ${displayIsHtmlElement ? styles.quiz_options : ''}`}
          >
            {options.map(
              (option: {
                value: string;
                display: string;
                isRejection: boolean;
              }) => (
                <Option
                  selectedOption={selectedOption}
                  setSelected={setSelectedOption}
                  value={option.value}
                  display={option.display}
                  key={option.value + ''}
                  isRejection={option.isRejection}
                  type={type}
                  displayIsHtmlElement={displayIsHtmlElement}
                />
              ),
            )}
          </div>

          <Button
            disabled={selectedOption.value === null}
            onClick={() => {
              setIsRejection(selectedOption?.isRejection);
              goForward(
                data?.questions?.length - 1,
                !!selectedOption?.isRejection,
              );
              if (selectedOption && selectedOption.value)
                updateQuestions(questionStep + '', selectedOption.value);
            }}
          >
            Continue
          </Button>
        </div>
      )}
    </div>
  );
};

const SuspensedQuiz = () => {
  return (
    <Suspense>
      <Quiz />
    </Suspense>
  );
};

export default SuspensedQuiz;
