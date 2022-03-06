const validateRequiredString = (value: string): string | undefined => {
  let error: string | undefined;
  if (!value) {
    error = 'Required';
  }
  return error;
};

export default validateRequiredString;