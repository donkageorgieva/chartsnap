import { useForm, type FieldValues } from 'react-hook-form';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import styles from './Form.module.scss';
import type { FormConfig, FormInput } from './types';

export function Form<TFieldValues extends FieldValues>({
  fields,
  submitForm,
}: FormConfig<TFieldValues>) {
  const { register, handleSubmit } = useForm<TFieldValues>();

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
        {fields.map((field: FormInput<TFieldValues>) => {
          return (
            <div className={styles.field}>
              <Input key={field.name} type={field.type} {...register(field.name)} />
            </div>
          );
        })}
        <Button type="submit" onClick={() => {}}>
          Submit
        </Button>
      </form>
    </div>
  );
}
