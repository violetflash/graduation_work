import Carousel from "./carousel";
import {moveLeftCheckArrow, moveRightCheckArrow} from "./utils";


const documents = () => {
  const sectionTransp = document.getElementById('transparency'),
    leftArrow = document.getElementById('transparency-arrow_left'),
    rightArrow = document.getElementById('transparency-arrow_right'),
    length = document.querySelectorAll('.transparency-slider .transparency-item').length;

  let activeSlide = 0;

  if (document.documentElement.clientWidth  > 1089) {
    return;
  }

  leftArrow.style.display = 'none';

  const transSlider = new Carousel({
    className: 'transparency-block',
    main: '.transparency-slider-wrap',
    wrapper: '.transparency-slider',
    next: '#transparency-arrow_right',
    prev: '#transparency-arrow_left',
    slidesToShow: 1,
  });

  transSlider.init();

  sectionTransp.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('#transparency-arrow_right')) {
      // moveRightCheckArrow(activeSlide, leftArrow, rightArrow, length); //TODO выяснить почему не выполняются
      if (activeSlide + 1 !== length) {
        activeSlide++;
        leftArrow.style.display = 'flex';
        if (activeSlide + 1 === length) {
          rightArrow.style.display = 'none';
        }
      }
    }

    if (target.closest('#transparency-arrow_left')) {
      // moveLeftCheckArrow(activeSlide, leftArrow, rightArrow);
      if (activeSlide !== 0) {
        activeSlide--;
        rightArrow.style.display = 'flex';
        if (activeSlide === 0) {
          leftArrow.style.display = 'none';
        }
      }
    }

  });
};

export default documents;
