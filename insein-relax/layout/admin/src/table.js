'use strict';

class ServicesList {
  constructor({
                db,
                select,
                table,
                modal,
                modalChange,
                changeBtn,
                deleteBtn,
                closeModal,
                addBtn,
                formAdd,
                formChange
              }) {
    this.db = db;
    this.table = document.querySelector(table);
    this.select = document.querySelector(select);
    this.modal = document.querySelector(modal);
    this.modalChange = document.querySelector(modalChange);
    this.formChange = document.querySelector(formChange);
    this.formAdd = document.querySelector(formAdd);
    this.closeModal = closeModal;
    this.addBtn = addBtn;
    this.changeBtn = changeBtn;
    this.deleteBtn = deleteBtn;
    this.types = new Set();
    this.id = 0;
    this.objToChange = {};
  }

  fetchData(db, options) {
    if (!options) {
      return fetch(db);
    }
    return fetch(db, options);
  }



  clearTable() {
    this.table.querySelector('tbody').innerHTML = '';
  }

  renderDb(db) {
    db.forEach(elem => {
      this.table.querySelector('tbody').innerHTML += `
        <tr class="table__row">
          <td class="table__id table__cell">${elem.id}</td>
          <td class="table-type table__cell">${elem.type}</td>
          <td class="table-name table__cell">${elem.name}</td>
          <td class="table-units table__cell">${elem.units}</td>
          <td class="table-cost table__cell">${elem.cost}</td>
          <td>
            <div class="table__actions table__cell">
                <button class="button action-change">
                    <span class="svg_ui">
                        <svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg>
                    </span>
                    <span>Изменить</span>
                </button>
                <button class="button action-remove">
                    <span class="svg_ui">
                        <svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg>
                    </span>
                    <span>Удалить</span>
                </button>
            </div>
          </td>
        </tr>
      `;
    });

  }

  setSelectOptions() {
    this.fetchData(this.db)
      .then(res => {
        res.json()
          .then(data => {
            data.forEach(elem => {
              this.types.add(elem.type);
            });
            this.select.innerHTML = '`<option>Все услуги</option>`';
            this.types.forEach(elem => {
              this.select.innerHTML += `<option value="${elem}">${elem}</option>`;
            });
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  checkFormInputs(form) {
    const inputs = form.querySelectorAll(`input`);
    for (const input of inputs) {
      if (!input.value) {
        return false;
      }
    }
    return true;
  }

  redirect() {
    window.location.replace("./index.html");
  }

  hideError(target) {
    target.nextElementSibling.classList.remove('js-active');
  }

  showError(target) {
    target.nextElementSibling.classList.add('js-active');
  }

  showModal(modal) {
    modal.style.display = 'flex';
  }

  hideModal(modal) {
    modal.style.display = 'none';
  }

  getCookie(name) {
    const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  getFullServices() {
    this.clearTable();
    this.fetchData(this.db)
      .then(res => {
        res.json()
          .then(data => {
            this.renderDb(data);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  eventListeners() {
    document.addEventListener('click', (e) => {
      const target = e.target;

      if (target.closest(this.addBtn)) {
        this.showModal(this.modal);
      }

      if (target.closest('.modal') && target.type === 'text') {
        this.hideError(target);
      }

      if (target.closest(this.deleteBtn) && target.closest('.table__row')) {
        const row = target.closest('.table__row');
        this.id = row.querySelector('.table__id').textContent;
        this.fetchData(
          `${this.db}${this.id}`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
          }
        )
          .catch(err => {
            console.log(err);
          });


        this.getFullServices();

      }

      if (target.closest(this.changeBtn) && target.closest('.table__row')) {
        const row = target.closest('.table__row');
        this.id = row.querySelector('.table__id').textContent;
        this.modalChange.querySelector('#type-change').value = row.querySelector('.table-type').textContent;
        this.modalChange.querySelector('#name-change').value = row.querySelector('.table-name').textContent;
        this.modalChange.querySelector('#cost-change').value = row.querySelector('.table-cost').textContent;
        this.modalChange.querySelector('#units-change').value = row.querySelector('.table-units').textContent;
        this.showModal(this.modalChange);
      }

      if (target.closest(this.closeModal) || target.closest('.cancel-button')) {
        this.hideModal(this.modal);
        this.hideModal(this.modalChange);
        this.formAdd.reset();
        this.formChange.reset();

      }


    });

    this.select.addEventListener('change', () => {
      this.searchTerm = this.select.value;

      if (this.select.selectedIndex > 0) {
        this.fetchData(this.db)
          .then(res => {
            res.json()
              .then(data => {
                this.filteredDb = data.filter(item => item.type === this.searchTerm);
                this.clearTable();
                this.renderDb(this.filteredDb);

              });
          })
          .catch(err => {
            console.log(err);
          });
        return;
      }

      this.getFullServices();
    });

    const formAddHandler = (e) => {
      e.preventDefault();

      const typeInput = document.getElementById('type'),
        nameInput = document.getElementById('name'),
        unitsInput = document.getElementById('units'),
        costInput = document.getElementById('cost');

      [typeInput, nameInput, unitsInput, costInput].forEach(element => {
        if (!element.value) {
          this.showError(element);
        }
      });


      if (this.checkFormInputs(this.formAdd)) {
        const type = typeInput.value,
          name = nameInput.value,
          units = unitsInput.value,
          cost = costInput.value;

        const object = {"type": type, "name": name, "units": units, "cost": cost};

        this.fetchData(
          `${this.db}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(object),
          }
        )
          .catch(err => {
            console.log(err);
          });
        this.getFullServices();


        this.hideModal(this.modal);
        this.formAdd.reset();
      }
    };

    const formChangeHandler = (e) => {
      e.preventDefault();

      const typeInput = document.getElementById('type-change'),
        nameInput = document.getElementById('name-change'),
        unitsInput = document.getElementById('units-change'),
        costInput = document.getElementById('cost-change');

      [typeInput, nameInput, unitsInput, costInput].forEach(element => {
        if (!element.value) {
          this.showError(element);
        }
      });


      if (this.checkFormInputs(this.formChange)) {
        const type = typeInput.value,
          name = nameInput.value,
          units = unitsInput.value,
          cost = costInput.value;

        const object = {"type": type, "name": name, "units": units, "cost": cost};

        console.log(object);
        this.fetchData(
          `${this.db}${this.id}`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(object),
          }
        )
          .catch(err => {
            console.log(err);
          });
        this.getFullServices();


        this.hideModal(this.modalChange);
        this.formChange.reset();
      }
    };


    this.formAdd.addEventListener('submit', formAddHandler);
    this.formChange.addEventListener('submit', formChangeHandler);
  }



  init() {

    if (!this.getCookie('loggedUser')) {
      this.redirect();
    }

    this.eventListeners();
    this.setSelectOptions();
    this.getFullServices();
  }
}

const listOfServices = new ServicesList({
  db: 'http://localhost:3000/api/items/',
  table: '#table',
  select: '#typeItem',
  modal: '#modal',
  modalChange: '#modal-change',
  closeModal: '.button__close',
  addBtn: '.btn-addItem',
  changeBtn: '.action-change',
  deleteBtn: '.action-remove',
  formAdd: '#modal form',
  formChange: '#modal-change form',
});

listOfServices.init();


// fetch(`http://localhost:3000/api/items/9730320403`)
//   .then(response => response.json().then(data => console.log(data)))
//
//   .catch(err => {
//     console.log(err);
//   });


// console.log(fetch('http://localhost:3000/api/items/{9730320403}'));

// // http://localhost:3000/api/items/{{"type": fhdfh, "name": dfhdh, "units": dfhdh, "cost": 2222}}
// const obj = {"type":"remont", "name":"odin", "units":"dva", "cost":"2222"};
// fetch(`http://localhost:3000/api/items/`,
//   {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     // body: JSON.stringify(obj)
//   })
//   .then(response => response.json().then(data => console.log(data)))
//
//   .catch(err => {
//     console.log(err);
//   });
