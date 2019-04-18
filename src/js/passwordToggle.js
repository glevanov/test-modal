const toggle = document.querySelector('.visibility-icon');
const input = document.getElementById('password');

const onToggleClick = () => {
  if (input.type === 'password') {
    input.type = 'text';
    toggle.classList.add('visibility-icon--visible');
  } else {
    input.type = 'password';
    toggle.classList.remove('visibility-icon--visible');
  }
};

export default () => {
  if (input && toggle) {
    toggle.addEventListener('click', onToggleClick)
  }
};
