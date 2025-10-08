import type { FormFieldName } from "./FormFieldName";

export type FormFieldsConfig = {
  name: FormFieldName;
  label: string;
  required?: boolean;
  multiline?: boolean;
};
