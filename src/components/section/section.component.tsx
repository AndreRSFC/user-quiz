import Image from 'next/image';
import { SECTIONS_DATA, SectionTypes } from './section.constants';
import styles from './section.module.css';

interface SectionProps {
  section: SectionTypes;
  reversed?: boolean;
}

export const Section = ({ section, reversed }: SectionProps) => {
  const { title, topic, image, number, text, imageDescription } =
    SECTIONS_DATA[section];

  return (
    <section
      data-testid="section-content"
      className={`${styles.section} ${reversed ? styles['section--reversed'] : ''}`}
    >
      <Image
        src={image}
        alt={imageDescription}
        width={370}
        height={445}
        className={styles.section_image}
      />
      <div
        className={`${styles.section_textContent} ${reversed ? styles['section_textContent--reversed'] : ''}`}
        data-section={number}
      >
        <span className={styles.section_topic}>{topic}</span>
        <h3 className={styles.section_title}>{title}</h3>
        <p className={styles.section_text}>{text}</p>
      </div>
    </section>
  );
};
