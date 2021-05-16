import {filteredData, clearTable, fillTable} from "./utils";

const fillRepairsSlider = () => {
  const db = 'https://graduate-f9f81-default-rtdb.europe-west1.firebasedatabase.app/works.json',
    ceilingDestrTable = document.querySelectorAll('.popup-repair-types-content-table__list')[0],
    ceilingInstallTable = document.querySelectorAll('.popup-repair-types-content-table__list')[1],
    wallDestrTable = document.querySelectorAll('.popup-repair-types-content-table__list')[2],
    wallInstallTable = document.querySelectorAll('.popup-repair-types-content-table__list')[3];

  const fetchData = (db) => {
    return fetch(db);
  };

  const response = fetchData(db);

  response
    .then((resp) => {
      resp.json()
        .then((data) => {

          const ceilingDestr = filteredData(data, 'type', 'Потолок: Демонтажные работы');
          const ceilingInstall = filteredData(data, 'type', 'Потолок: Монтажные работы');
          const wallDestr = filteredData(data, 'type', 'Стена: Демонтажные работы');
          const wallInstall = filteredData(data, 'type', 'Стены: Монтажные работы');

          [ceilingDestrTable, ceilingInstallTable, wallDestrTable, wallInstallTable].forEach(table => clearTable(table));
          ceilingDestr.forEach(elem => fillTable(ceilingDestrTable, elem.name, elem.units, elem.cost));
          ceilingInstall.forEach(elem => fillTable(ceilingInstallTable, elem.name, elem.units, elem.cost));
          wallDestr.forEach(elem => fillTable(wallDestrTable, elem.name, elem.units, elem.cost));
          wallInstall.forEach(elem => fillTable(wallInstallTable, elem.name, elem.units, elem.cost));

        });
    })
    .catch(err => {
      console.log(err);
    });


};

export default fillRepairsSlider;
