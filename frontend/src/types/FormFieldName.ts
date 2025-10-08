export const FormFieldName = {
  Name: 'name',
  Position: 'position',
  City: 'city',
  Email: 'email',
  Skills: 'skills',
  Experience: 'experience',
  Education: 'education',
  About: 'about',
} as const;

export type FormFieldName = (typeof FormFieldName)[keyof typeof FormFieldName];
