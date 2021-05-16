import Carousel from "./carousel";
import { setDataIndexes, removeElementsClass } from './utils';

const popupRepairsSlider = () => {
  const list = document.querySelectorAll('.popup-repair-types-content-table__list'),
    buttons = document.querySelectorAll('.popup-repair-types-nav__item'),
    popupRepairsSection = document.querySelector('.popup-repair-types');

  const repairsPopupSlider = new Carousel({
    className: 'repPop',
    main: '.popup-repair-types-content-table',
    wrapper: '.popup-repair-types-box',
    next: '#nav-arrow-popup-repair_right',
    prev: '#nav-arrow-popup-repair_left',
    dotsClass: '.popup-repair-types-nav__item',
    slidesToShow: 1,
  });

  repairsPopupSlider.init();
  setDataIndexes([list, buttons]);

  buttons[0].classList.add('js-active');

  if (document.documentElement.clientWidth > 1025) {

    popupRepairsSection.addEventListener('click', (e) => {
      const target = e.target;

      if (target.classList.contains('popup-repair-types-nav__item')) {
        removeElementsClass(buttons, 'js-active');
        target.classList.add('js-active');
      }
    });

  }

  if (document.documentElement.clientWidth < 1025) {

    removeElementsClass(buttons, 'js-active');

    const buttonsSlider = new Carousel({
      className: 'buttons',
      main: '.nav-popup-repair-types',
      wrapper: '.nav-list-popup-repair',
      next: '#nav-arrow-popup-repair_right',
      prev: '#nav-arrow-popup-repair_left',
      slidesToShow: 1,
    });

    buttonsSlider.init();
  }

};


export default popupRepairsSlider;
