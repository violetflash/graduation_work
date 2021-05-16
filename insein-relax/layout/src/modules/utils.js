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

export { updateSliderCounter, setDataIndexes, getDatasetIndex, showPopup, hidePopup };
