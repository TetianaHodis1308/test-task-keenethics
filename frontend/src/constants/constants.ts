import type { FormFieldsConfig } from '../types/FormFieldsConfig';
import type { ResumeFormData } from '../types/FormData';
import { FormFieldName } from '../types/FormFieldName';

export const emptyFormData: ResumeFormData = {
  name: '',
  position: '',
  city: '',
  email: '',
  skills: '',
  experience: '',
  education: '',
  about: '',
};

export const formFields: FormFieldsConfig[] = [
  { name: FormFieldName.Name, label: 'Ім’я', required: true },
  { name: FormFieldName.Position, label: 'Посада', required: true },
  { name: FormFieldName.City, label: 'Місто', required: true },
  { name: FormFieldName.Email, label: 'Email', required: true },
  { name: FormFieldName.Skills, label: 'Навички', required: true },
  {
    name: FormFieldName.Experience,
    label: 'Досвід',
    required: true,
    multiline: true,
  },
  { name: FormFieldName.Education, label: 'Освіта' },
  {
    name: FormFieldName.About,
    label: 'Розкажіть коротко про себе',
    multiline: true,
  },
];

export const initialTouchedState = {
  name: false,
  position: false,
  city: false,
  email: false,
  skills: false,
  experience: false,
  education: false,
  about: false,
};
