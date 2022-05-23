const validateEmail = (email: string): string | undefined => {
  let error: string | undefined;

  if (!email) {
    return 'Required';
  }
  else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return undefined;
  }

  return "Invalid";
};

export default validateEmail;