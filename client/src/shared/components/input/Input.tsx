import { forwardRef } from 'react';

export type InputType = React.ComponentPropsWithoutRef<'input'>['type'];

import styles from './Input.module.scss';

interface InputProps {
  type: InputType;
}

function InputBase({ type = 'text', ...rest }: InputProps, ref: React.Ref<HTMLInputElement>) {
  return <input className={styles.input} type={type} ref={ref} {...rest} />;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputBase);
