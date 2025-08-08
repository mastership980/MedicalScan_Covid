(() => {
  'use strict';

  // Minden form kiválasztása, ami validációt igényel
  const forms = document.querySelectorAll('.needs-validation');
  const toastTrigger = document.getElementById('toastTrigger');
  const toastAlert = document.getElementById('toastAlert');

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
        form.classList.add('was-validated');
      }
      // Ha valid, akkor a Bootstrap toastot megjeleníti és a formot reseteli
      else{
        event.preventDefault();
        // Bootstrap validációs stílus hozzáadása
        form.classList.remove('was-validated');
        const toast = new bootstrap.Toast(toastAlert);
        toast.show();
        form.reset();
      }

    }, false);
  });
})();