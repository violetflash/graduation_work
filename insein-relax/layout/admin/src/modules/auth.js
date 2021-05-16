const auth = () => {
  const submitBtn = document.querySelector('.button-ui_firm'),
    warnings = document.querySelectorAll('.text-warning'),
    form = document.querySelector('.main-form form'),
    db = 'https://auth-79e83-default-rtdb.europe-west1.firebasedatabase.app/users.json',
    login = document.getElementById('name'),
    password = document.getElementById('type'),
    onEmpty = 'Поле не должно быть пустым',
    incorrectName = 'Не верное имя',
    incorrectPassword = 'Не верный пароль';


  const hideError = (target, className) => {
    target.nextElementSibling.classList.remove(className);
  };

  const setError = (target, text) => {
    target.nextElementSibling.textContent = text;
  };

  const fetchData = (db) => {
    return fetch(db);
  };

  document.addEventListener('click', (e) => {
    const target = e.target;

    if (target.id === 'type' || target.id === 'name') {
      hideError(target, 'js-active');
    }

  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetchData(db)
      .then((response) => {
        response.json()
          .then((data) => {
            console.log(data)
            data.forEach(user => {
              console.log(user.login)
              if (user.login === login.value && user.password === password.value) {
                window.location.replace("http://localhost:8080/table.html");
                return;
              }
              if (user.login !== login.value) {
                setError(login, incorrectName);
                return;
              }

              if (user.login === login.value && user.password !== password.value) {
                setError(password, incorrectPassword);
                return;
              }
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });


    // warnings.forEach(elem => elem.classList.add('js-active'));

    // form.reset();
  });
};

export default auth;
