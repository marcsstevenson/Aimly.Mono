const validateTrue = (value: boolean): string | undefined => {
  let error: string | undefined;
  if (!value) {
    error = 'Required';
  }
  return error;
};

export default validateTrue;