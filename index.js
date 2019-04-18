(function () {
  'use strict';

  var toggle = document.querySelector('.visibility-icon');
  var input = document.getElementById('password');

  var onToggleClick = function onToggleClick() {
    if (input.type === 'password') {
      input.type = 'text';
      toggle.classList.add('visibility-icon--visible');
    } else {
      input.type = 'password';
      toggle.classList.remove('visibility-icon--visible');
    }
  };

  var passwordToggle = (function () {
    if (input && toggle) {
      toggle.addEventListener('click', onToggleClick);
    }
  });

  passwordToggle();

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbInNyYy9qcy9wYXNzd29yZFRvZ2dsZS5qcyIsInNyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlzaWJpbGl0eS1pY29uJyk7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpO1xuXG5jb25zdCBvblRvZ2dsZUNsaWNrID0gKCkgPT4ge1xuICBpZiAoaW5wdXQudHlwZSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ3Zpc2liaWxpdHktaWNvbi0tdmlzaWJsZScpO1xuICB9IGVsc2Uge1xuICAgIGlucHV0LnR5cGUgPSAncGFzc3dvcmQnO1xuICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmlsaXR5LWljb24tLXZpc2libGUnKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBpZiAoaW5wdXQgJiYgdG9nZ2xlKSB7XG4gICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25Ub2dnbGVDbGljaylcbiAgfVxufTtcbiIsImltcG9ydCBwYXNzd29yZFRvZ2dsZSBmcm9tICcuL2pzL3Bhc3N3b3JkVG9nZ2xlJztcblxucGFzc3dvcmRUb2dnbGUoKTtcbiJdLCJuYW1lcyI6WyJ0b2dnbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dCIsImdldEVsZW1lbnRCeUlkIiwib25Ub2dnbGVDbGljayIsInR5cGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc3dvcmRUb2dnbGUiXSwibWFwcGluZ3MiOiI7OztFQUFBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUFmO0VBQ0EsSUFBTUMsS0FBSyxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZDs7RUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07RUFDMUIsTUFBSUYsS0FBSyxDQUFDRyxJQUFOLEtBQWUsVUFBbkIsRUFBK0I7RUFDN0JILElBQUFBLEtBQUssQ0FBQ0csSUFBTixHQUFhLE1BQWI7RUFDQU4sSUFBQUEsTUFBTSxDQUFDTyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQiwwQkFBckI7RUFDRCxHQUhELE1BR087RUFDTEwsSUFBQUEsS0FBSyxDQUFDRyxJQUFOLEdBQWEsVUFBYjtFQUNBTixJQUFBQSxNQUFNLENBQUNPLFNBQVAsQ0FBaUJFLE1BQWpCLENBQXdCLDBCQUF4QjtFQUNEO0VBQ0YsQ0FSRDs7QUFVQSx3QkFBZSxZQUFNO0VBQ25CLE1BQUlOLEtBQUssSUFBSUgsTUFBYixFQUFxQjtFQUNuQkEsSUFBQUEsTUFBTSxDQUFDVSxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ0wsYUFBakM7RUFDRDtFQUNGLENBSkQ7O0VDWEFNLGNBQWM7Ozs7In0=
