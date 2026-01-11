import type { FieldValues, Path, SubmitHandler } from 'react-hook-form';
import type { InputType } from '../input/types';

export interface FormInput<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  type: InputType;
}

export interface FormConfig<TFieldValues extends FieldValues> {
  fields: FormInput<TFieldValues>[];
  submitForm: SubmitHandler<TFieldValues>;
}
