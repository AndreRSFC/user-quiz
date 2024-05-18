import styles from './page.module.css';
import { Section, SectionTypes } from '@/components/section';
import { Footer } from '@/components/footer';
import { Highlight } from '@/components/highlight';

export default function Home() {
  return (
    <div>
      <Highlight />
      <h1 className={styles.section_title}>What we can help with</h1>
      <Section section={SectionTypes.HAIR_LOSS} />
      <Section section={SectionTypes.ERECETILE_DISFUNCTION} reversed />
      <Footer />
    </div>
  );
}
