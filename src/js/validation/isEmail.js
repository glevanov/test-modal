export default (input) => {
  if (typeof input !== 'string') {
    return false;
  }
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.value = input;
  return emailInput.validity.valid;
};
