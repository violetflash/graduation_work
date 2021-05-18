import { hidePopup, showPopup } from "./utils";

const sendForms = () => {
  const forms = document.querySelectorAll('form'),
    successPopup = document.querySelector('.popup-thank'),
    warnings = document.querySelectorAll('.text-warning');



  let timeoutId;

  const checkFormFill = form => {
    const inputs = form.querySelectorAll('input'),
      checkbox = form.querySelector('input[type="checkbox"]'),
      checkboxDiv = form.querySelector('.checkbox'),
      warning = form.querySelector('.text-warning');

    let result = true;

    inputs.forEach(element => {

      if (element.type.toLowerCase() === 'button') {
        return;
      }

      if (!element.value) {
        warning.classList.add('js-active');
        timeoutId = setTimeout(() => {
          warning.classList.remove('js-active');
        }, 1000);
        result = false;
      }

    });

    if (checkbox.checked === false) {
      checkboxDiv.classList.add('js-active');
      timeoutId = setTimeout(() => {
        checkboxDiv.classList.remove('js-active');
      }, 1000);
      result = false;
    }

    return result;
  };

  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();

      if (!checkFormFill(form)) {
        return;
      }

      const formData = new FormData(form);
      let body = {};

      formData.forEach((val, key) => {
        body[key] = val;
      });

      body = JSON.stringify(body);
      postData(body)
        .then(response => {

          if (response.status !== 200) {
            throw new Error('Нет ответа от сервера');
          }
          showPopup(successPopup);
          setTimeout(() => {
            hidePopup(successPopup);
          }, 5000);
          form.reset();
        })
        .catch(error => {
          console.error(error);
        });
    });
  });

  const postData = body => fetch('./server.php', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json'
      },
    });

  timeoutId = null;
};

export default sendForms;
