import {showPopup} from "./utils";

const sendForms = () => {
  const forms = document.querySelectorAll('form'),
    successPopup = document.querySelector('.popup-thank');

  const checkFormFill = (form) => {
    const inputs = form.querySelectorAll('input');
    const checkbox = form.querySelector('input[type="checkbox"]');
    let result = true;

    inputs.forEach((element) => {

      if (element.type.toLowerCase() === 'button') {
        return;
      }

      if (!element.value) {
        result = false;
      }

    });

    if (checkbox.checked === false) {
      result = false;
    }

    return result;
  };

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
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
        .then((response) => {

          if (response.status !== 200) {
            throw new Error('Нет ответа от сервера');
          }
          showPopup(successPopup);
          clearForm(form);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  });

  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json'
      },
    });
  };

  const clearForm = (form) => {
    const inputs = form.querySelectorAll('input');
    inputs.forEach((element) => {
      if (element.type.toLowerCase() === 'button') {
        return;
      }
      element.value = '';
    });

  };
};

export default sendForms;
