'use strict';

class ServicesList {
  constructor({ db, select, table }) {
    this.db = db;
    this.table = table;
    this.select = select;
    this.types = new Set();
  }

  fetchData(db) {
    return fetch(db);
  }

  clearTable() {
    this.table.querySelector('tbody').innerHTML = '';
  }

  renderTable(service) {
    this.table.querySelector('tbody').innerHTML += `
    <tr class="table__row">
      <td class="table__id table__cell">${service.id}</td>
      <td class="table-type table__cell">${service.type}</td>
      <td class="table-name table__cell">${service.name}</td>
      <td class="table-units table__cell">${service.units}</td>
      <td class="table-cost table__cell">${service.cost}</td>
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

  redirect() {
    window.location.replace("http://localhost:8080/index.html");
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
            data.forEach(elem => {
              this.renderTable(elem);
            });
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  eventListeners() {
    document.addEventListener('click', () => {

    });

    this.select.addEventListener('change', () => {
      console.log(this.select.value);
    });
  }

  init() {

    if (!this.getCookie('loggedUser')) {
      this.redirect();
    }

    this.setSelectOptions();
    this.getFullServices();
  }
}

const listOfServices = new ServicesList({
  db: 'http://localhost:3000/api/items',
  table: document.getElementById('table'),
  select: document.getElementById('typeItem')
});

listOfServices.init();




// fetch(`http://localhost:3000/api/items/9730320403`)
//   .then(response => response.json().then(data => console.log(data)))
//
//   .catch(err => {
//     console.log(err);
//   });
//

// console.log(fetch('http://localhost:3000/api/items/{9730320403}'));
