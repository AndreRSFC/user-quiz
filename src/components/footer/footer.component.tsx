import { Facebook, Google, Logo, Twitter } from '@/icons';
import styles from './footer.module.css';
import { FOOTER_LINKS } from './footer.constants';
import Link from 'next/link';

export const Footer = () => {
  const currentlyYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <Logo />
        <div className={styles.footer_columns}>
          {FOOTER_LINKS.map((column) => {
            return (
              <ul key={column.name} className={styles.footer_column}>
                <li className={styles.footer_columnTitle}>{column.name}</li>
                {column.items.map((item) => (
                  <li key={item.name}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            );
          })}
          <div>
            <span className={styles.footer_socialMediaTitle}>Follow us</span>
            <div className={styles.footer_socialMediaList}>
              <Facebook />
              <Google />
              <Twitter />
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.footer_separator} />
      <span
        className={styles.footer_copyrightText}
        data-testid="footer_copyrightText"
      >
        © {currentlyYear} Manual. All rights reserverd
      </span>
    </footer>
  );
};
