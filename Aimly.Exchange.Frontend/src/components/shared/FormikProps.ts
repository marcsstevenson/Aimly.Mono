// Provides generic props for Formik components
// the generic is used for the type of the values object

import { FieldInputProps, FormikState } from 'formik';

export interface FormikProps<T> {
  field: FieldInputProps<T>;
  form: FormikState<any>;
}