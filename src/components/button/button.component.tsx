import { ReactNode } from 'react';
import { ButtonType } from './button.constants';

import styles from './button.module.css';

interface ButtonProps {
  children: ReactNode;
  styleType?: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({ children, styleType, ...props }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[styleType || 'button_primary']}`}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
};
