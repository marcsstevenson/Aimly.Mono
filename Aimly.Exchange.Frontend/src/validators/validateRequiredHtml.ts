const validateRequiredHtml = (value: string): string | undefined => {

  let error: string | undefined;
  if (!value || value.trim() === '<p></p>') {
    error = 'Required';
  }
  return error;
};

export default validateRequiredHtml;