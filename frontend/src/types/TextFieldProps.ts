import type { FormFieldName } from './FormFieldName';

export type TextFieldProps = {
  name: FormFieldName;
  value: string;
  label?: string;
  required?: boolean;
  onChange?: (
    newValue: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    val: FormFieldName,
  ) => void;
  multiline?: boolean;
  touched: { [key in FormFieldName]: boolean };
  onTouched: (touched: Record<FormFieldName, boolean>) => void;
};
