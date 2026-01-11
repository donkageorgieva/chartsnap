import styles from './Button.module.scss';

type ButtonType = React.ComponentPropsWithoutRef<'button'>['type'];

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  type?: ButtonType;
}

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
