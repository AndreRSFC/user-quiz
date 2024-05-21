import { Back } from '@/icons';
import styles from './quiz-header.module.css';

interface QuizHeader {
  goBack: () => void;
}

export const QuizHeader = ({ goBack }: QuizHeader) => {
  return (
    <nav className={styles.header}>
      <button
        className={styles.header_back}
        onClick={goBack}
        aria-label="Go to previous page"
      >
        <Back />
      </button>
    </nav>
  );
};
