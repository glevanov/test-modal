const inputs = Array.from(document.querySelectorAll('.input-group__input'));

const handleBlur = (evt) => {
  const input = evt.target;
  const label = input.previousElementSibling;
  if (!input.value.trim()) {
    label.classList.remove('input-group__label--on');
  }
};

const handleFocus = (evt) => {
  const input = evt.target;
  const label = input.previousElementSibling;
  label.classList.add('input-group__label--on');

  input.addEventListener('blur', handleBlur)
};

export default () => {
  inputs.forEach(input => input.addEventListener('focus', handleFocus))
};
