const auth = () => {
  const submitBtn = document.querySelector('.button-ui_firm'),
    warnings = document.querySelectorAll('.text-warning'),
    form = document.querySelector('.main-form form'),
    db = 'https://auth-79e83-default-rtdb.europe-west1.firebasedatabase.app/users.json',
    login = document.getElementById('name'),
    password = document.getElementById('type'),
    onEmpty = 'Поле не должно быть пустым',
    incorrectName = 'Нет такого пользователя',
    incorrectPassword = 'Неверный пароль',
    activeClass = 'js-active';

  const hideError = (target, className) => {
    target.nextElementSibling.classList.remove(className);
  };

  const setError = (target, text, className) => {
    target.nextElementSibling.textContent = text;
    target.nextElementSibling.classList.add(className);
  };

  const fetchData = db => fetch(db);

  const setCookie = (name, value, options = {}) => {

    options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options
    };

    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }

    document.cookie = updatedCookie;
  };



  document.addEventListener('click', e => {
    const target = e.target;

    if (target.id === 'type' || target.id === 'name') {
      hideError(target, activeClass);
    }

  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    fetchData(db)
      .then(response => {
        response.json()
          .then(data => {
            console.log('users:', data);

            let loggedUser = data.find(elem => elem.login === login.value);

            if (!loggedUser) {
              setError(login, incorrectName, activeClass);
              // form.reset();
              return;
            }

            if (loggedUser && password.value !== loggedUser.password) {
              setError(password, incorrectPassword, activeClass);
              // form.reset();
              return;
            }

            if (loggedUser && password.value === loggedUser.password) {
              setCookie('loggedUser', loggedUser.login);
              window.location.replace("http://localhost:8080/table.html");
            }

            loggedUser = null;
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });


    // form.reset();
  });
};

export default auth;
