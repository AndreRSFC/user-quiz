import { ReactNode } from 'react';
import { ButtonType } from './button.constants';
import { ttNorms } from '@/fonts';
import styles from './button.module.css';
import '../../app/globals.css';

interface ButtonProps {
  children: ReactNode;
  styleType?: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({ children, styleType, ...props }: ButtonProps) => {
  return (
    <button
      className={`${ttNorms.className} ${styles.button} ${styles[styleType || 'button_primary']}`}
      {...props}
    >
      {children}
    </button>
  );
};
