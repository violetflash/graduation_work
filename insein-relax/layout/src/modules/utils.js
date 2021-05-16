const updateSliderCounter = (id, current, total) => {
  const sliderCounterCurrent = document.querySelector(`#${id} .slider-counter-content__current`),
    sliderCounterTotal = document.querySelector(`#${id} .slider-counter-content__total`);
  sliderCounterCurrent.textContent = current;
  sliderCounterTotal.textContent = total;
};

const setDataIndexes = (arr) => {
  arr.forEach((element) => {
    element.forEach((item, index) => {
      item.setAttribute('data-index', `${index}`);
    });
  });
};

const showPopup = (popup) => {
  popup.style.visibility = 'visible';
  popup.style.transform = 'translateY(0)';
  popup.style.opacity = 1;
  document.body.style.overflow = 'hidden';
};

const hidePopup = (popup) => {
  popup.style.visibility = 'hidden';
  popup.style.transform = 'translateY(10px)';
  popup.style.opacity = 0;
  document.body.style.overflow = 'visible';
};

const getDatasetIndex = (target) => {
  return +target.dataset.index;
};

const moveRightCheckArrow = (activeSlide, leftArrow, rightArrow, length) => {
  if (activeSlide + 1 !== length) {
    activeSlide++; //TODO не выполняет
    console.log(activeSlide, 'of', length);
    leftArrow.style.display = 'flex';
    if (activeSlide + 1 === length) {
      rightArrow.style.display = 'none';
    }
  }
};

const moveLeftCheckArrow = (activeSlide, leftArrow, rightArrow) => {
  if (activeSlide !== 0) {
    activeSlide--;
    rightArrow.style.display = 'flex';
    if (activeSlide === 0) {
      leftArrow.style.display = 'none';
    }
  }
};


const removeElementsClass = (nodeList, className) => {
  nodeList.forEach(element => element.classList.remove(className));
};


const filteredData = (source, key, value) => {
  return source.filter(element => {
    if (element[key] === value) {
      return element;
    }
  });
};

const clearTable = (elem) => {
  elem.innerHTML = '<tbody></tbody>';
};

const fillTable = (table, name, units, cost) => {
  table.querySelector('tbody').innerHTML += `
    <tr class="mobile-row">
      <td class="repair-types-name">${name}</td>
      <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
      <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
      <td class="repair-types-value">${units}</td>
      <td class="repair-types-value">${cost} руб.</td>
    </tr>
  `;
};

export {
  updateSliderCounter,
  setDataIndexes,
  getDatasetIndex,
  showPopup,
  hidePopup,
  moveLeftCheckArrow,
  moveRightCheckArrow,
  removeElementsClass,
  filteredData,
  clearTable,
  fillTable,
};
