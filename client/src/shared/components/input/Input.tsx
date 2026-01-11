import { forwardRef } from 'react';

import styles from './Input.module.scss';
import type { InputProps } from './types';

function InputBase({ type = 'text', ...rest }: InputProps, ref: React.Ref<HTMLInputElement>) {
  return <input className={styles.input} type={type} ref={ref} {...rest} />;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputBase);
