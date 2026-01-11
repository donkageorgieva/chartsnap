import styles from './Button.module.scss';
import type { ButtonProps } from './types';

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
