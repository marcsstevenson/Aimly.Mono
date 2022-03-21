const validateRequiredString = (value: string): string | undefined => {
  // console.log(value);
  let error: string | undefined;
  if (!value) {
    error = 'Required';
  }
  return error;
};

export default validateRequiredString;