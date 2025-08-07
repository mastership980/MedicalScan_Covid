(() => {
  'use strict';

  // Minden form kiválasztása, ami validációt igényel
  const forms = document.querySelectorAll('.needs-validation');

  // Minden formhoz eseményfigyelő
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      // Hozzászólás mező hossza minimum 10 karakter  
      const desc = form.querySelector('#desc');
      if (desc.value.trim().length < 10) {
        desc.setCustomValidity('too short');
      } else {
        desc.setCustomValidity('');
      }

      // Ha nem valid, elküldést megakadályozza
      if (form.checkValidity() == false) {
        event.preventDefault();
        event.stopPropagation();
      }

      // Bootstrap validációs stílus hozzáadása
      form.classList.add('was-validated');
    }, false);
  });
})();