import { Logo } from '@/icons';
import Link from 'next/link';

import styles from './highlight.module.css';

export const Highlight = () => {
  return (
    <div className={styles.highlight}>
      <div className={styles.highlight_textContent}>
        <Logo />
        <h1 className={styles.highlight_title}>
          Be good <br /> to yourself
        </h1>
        <p className={styles.highlight_text}>
          We’re working around the clock to bring you a holistic approach to
          your wellness. From top to bottom, inside and out.
        </p>
        <Link href="/quiz" className={styles.highlight_button}>
          Take the quiz
        </Link>
      </div>
    </div>
  );
};
