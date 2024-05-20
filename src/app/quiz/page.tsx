'use client';
import { useEffect, useState } from 'react';
import { Back } from '@/icons';

import styles from './quiz.module.css';

import { Option } from '@/components/option';
import useStepNavigation, { isHtmlElement } from './quiz.util';
import { useQuizData } from './quiz.service';

import { useSearchParams } from 'next/navigation';
import { useQuizStore } from '@/store/quiz-data.store';
import { SelectedOptionModel } from './quiz.models';

const Quiz = () => {
  const { data } = useQuizData();
  const [selectedOption, setSelectedOption] = useState<SelectedOptionModel>({
    value: null,
    isRejection: false,
  });
  const updateQuestions = useQuizStore((state) => state.updateQuestions);

  const searchParams = useSearchParams();
  const questionStep = searchParams?.get('questionStep') || 0;
  const { goBack, goForward } = useStepNavigation();

  const questions = useQuizStore((state) => state.questions);

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
  const displayIsHtmlElement = isHtmlElement(options[0].display);

  return (
    <div className={styles.quiz}>
      <nav className={styles.quiz_header}>
        <button className={styles.quiz_backButton} onClick={goBack}>
          <Back />
        </button>
      </nav>
      <div className={styles.quiz_content}>
        <h1 className={styles.quiz_title}>{question}</h1>
        <div className={`${displayIsHtmlElement ? styles.quiz_options : ''}`}>
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

        <button
          disabled={!selectedOption}
          className={styles.quiz_continueButton}
          onClick={() => {
            goForward(
              data?.questions?.length - 1,
              !!selectedOption?.isRejection,
            );
            if (selectedOption && selectedOption.value)
              updateQuestions(questionStep + '', selectedOption.value);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Quiz;
