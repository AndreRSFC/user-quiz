'use client';
import { Button, ButtonType } from '@/components/button';
import { NotFoundIcon } from '@/icons';

import styles from './not-found.module.css';
import { QuizHeader } from '@/components/quiz-header';
import { Footer } from '@/components/footer';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();

  return (
    <div style={{ backgroundColor: '#b2bea6' }}>
      <QuizHeader
        goBack={() => {
          router.push('/');
        }}
      />
      <section className={styles.notFound}>
        <NotFoundIcon aria-label="Icon with a white flag" />
        <h1 className={styles.notFound_title}>Something has gone wrong</h1>
        <p className={styles.notFound_text}>
          Looks like we’ve taken a wrong turn. Shall we back up and give that
          another go?
        </p>
        <div className={styles.notFound_buttons}>
          <Button
            onClick={() => {
              router.push('http://www.manual.co');
            }}
            styleType={ButtonType.PRIMARY}
          >
            Back to Manual
          </Button>
          <Button
            onClick={() => {
              router.push('/');
            }}
            styleType={ButtonType.SECONDARY}
          >
            Back to Home Page
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
