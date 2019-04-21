import isEmail from './isEmail';
import isPassword from './isPassword';

const validity = {
  email: false,
  password: false,
};

const form = document.querySelector('.modal__form');
const button = form.querySelector('.modal__submit');
const email = document.getElementById('email');
const password = document.getElementById('password');

const isFormValid = () => {
  const arr = Object.values(validity);
  return arr.every(it => it === true);
};

const handleValidity = () => {
  if (isFormValid()) {
    button.classList.remove('button--error');
    button.classList.add('button--correct');
  } else {
    button.classList.remove('button--correct');
  }
};

const handleSubmit = (evt) => {
  evt.preventDefault();
  if (isFormValid()) {
    alert('OK');
  } else {
    button.classList.add('button--error');
  }
};

const handleInput = (evt, validator, fieldName) => {
  const value = evt.target.value;
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
