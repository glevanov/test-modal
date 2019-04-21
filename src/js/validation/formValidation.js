import isEmail from './isEmail';
import isPassword from './isPassword';

const form = document.querySelector('.modal__form');
const button = form.querySelector('.modal__submit');
const email = document.getElementById('email');
const password = document.getElementById('password');

const inputs = [email, password];
const labels = Array.from(form.querySelectorAll('.input-group__label'));

const validity = {
  email: false,
  password: false,
};

const colorInputs = (isValid) => {
  inputs.forEach(input => input.classList.remove('input-group__input--error'));
  labels.forEach(label => label.classList.remove('input-group__label--error'));
  if (!isValid) {
    inputs.forEach(input => input.classList.add('input-group__input--error'));
    labels.forEach(label => label.classList.add('input-group__label--error'));
  }
};

const isFormValid = () => {
  const arr = Object.values(validity);
  return arr.every(it => it === true);
};

const handleValidity = () => {
  const isValid = isFormValid();
  if (isValid) {
    button.classList.remove('button--error');
    button.classList.add('button--correct');
    colorInputs(isValid);
  } else {
    button.classList.remove('button--correct');
  }
};

const handleSubmit = (evt) => {
  evt.preventDefault();
  const isValid = isFormValid();
  if (isValid) {
    alert('OK');
  } else {
    button.classList.add('button--error', 'button--shake');
    setTimeout(() => {
      button.classList.remove('button--shake');
    }, 500);
    colorInputs(isValid);
  }
};

const handleInput = (evt, validator, fieldName) => {
  const value = evt.target.value.replace(/\s/g, '');
  evt.target.value = value;
  validity[fieldName] = validator(value);
  handleValidity();
};
const handleEmailInput = (evt) => handleInput(
  evt, isEmail, 'email'
);
const handlePasswordInput = (evt) => handleInput(
  evt, isPassword, 'password'
);

export default () => {
  email.addEventListener('input', handleEmailInput);
  password.addEventListener('input', handlePasswordInput);
  form.addEventListener('submit', handleSubmit);
}
