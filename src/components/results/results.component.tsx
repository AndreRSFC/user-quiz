import Image from 'next/image';
import styles from './results.module.css';
import { Button } from '../button';
import Link from 'next/link';
import { ButtonType } from '../button/button.constants';
import { getResultsContent } from './results.util';
import { useRouter } from 'next/navigation';

interface ResultsProps {
  isRejection?: boolean;
  setIsRejectionFalse: () => void;
}

export const Results = ({ isRejection, setIsRejectionFalse }: ResultsProps) => {
  const { title, text, button } = getResultsContent(!!isRejection);
  const router = useRouter();

  return (
    <div className={styles.results}>
      <Image
        src="/images/dr-avatar.image.webp"
        loading="lazy"
        width={64}
        height={64}
        alt="doctor image"
      />
      <div className={styles.results_textContainer}>
        <h1 className={styles.results_title}>{title}</h1>
        <p className={styles.results_text}>{text}</p>
      </div>
      <Button
        styleType={ButtonType.SECONDARY}
        onClick={() => {
          if (isRejection) {
            setIsRejectionFalse();
          } else {
            router.push('http://www.manual.co');
          }
        }}
      >
        {button}
      </Button>
      <Link className={styles.results_link} href="/">
        Back to homepage
      </Link>
    </div>
  );
};
