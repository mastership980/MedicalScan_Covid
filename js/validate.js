(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      const desc = form.querySelector('#desc');
      if (desc.value.trim().length < 10) {
        desc.setCustomValidity('too short');
      } else {
        desc.setCustomValidity('');
      }

      if (form.checkValidity() == false) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
})();