import Carousel from './carousel';
import { setDataIndexes, showPopup, updateSliderCounter } from './utils';


const portfolioSlider = () => {
  const portfolioSection = document.getElementById('portfolio'),
    rightArrow = document.getElementById('portfolio-arrow_right'),
    leftArrow = document.getElementById('portfolio-arrow_left'),
    imagesBlock = document.querySelector('.portfolio-slider-slides-box'),
    sliderWrapper = document.querySelector('.portfolio-slider'),
    imagesBlockWidth = imagesBlock.clientWidth,
    slides = document.querySelectorAll('.portfolio-slider__slide'),
    slideWidth = document.querySelector('.portfolio-slider__slide').clientWidth,
    slidesNum = slides.length,
    portfolioPopup = document.querySelector('.popup-portfolio'),
    images = document.querySelectorAll('.portfolio-slider-slides-box .portfolio-slider__slide-frame'),
    images570p = document.querySelectorAll('.portfolio-slides-box .portfolio-slider__slide-frame'),
    popupTexts = document.querySelectorAll('.popup-portfolio-text');


  let movedDistance = imagesBlockWidth,
    step = 0,
    counter = 1,
    amount = 0,
    fullwidth = 0,
    currentPopupSlide = 0;

  const showPopupsText = (idx) => {
    popupTexts.forEach((element, index) => {
      element.style.display = 'none';
      if (idx === +element.dataset.index) {
        // console.log(element);
        element.style.display = 'flex';
      }
    });
  };

  setDataIndexes([images, images570p, popupTexts]);

  step = slideWidth;
  fullwidth = slidesNum * slideWidth;
  // console.log('movedDistance:', movedDistance);


  //слайдер десктоп-таблет
  portfolioSection.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('#portfolio-arrow_right')) {
      fullwidth = slidesNum * slideWidth;
      // console.log('step:', step);


      if (movedDistance< fullwidth) {
        amount = step * counter;
        // console.log('amount', amount);

        imagesBlock.style.transform = `translateX(-${amount}px)`;
        counter++;
        movedDistance += step + 5;  //5 - погрешность от округления
        // console.log(movedDistance, 'of', fullwidth);

        if (movedDistance >= fullwidth) {
          movedDistance = imagesBlockWidth;
          rightArrow.style.display = 'none';
          leftArrow.style.display = 'flex';
          counter = 1;
        }
      }
    }

    if (target.closest('#portfolio-arrow_left')) {
      fullwidth = slidesNum * slideWidth;
      // console.log('slideWidth:', slideWidth);
      // console.log('fullwidth', fullwidth);


      if (amount > 0) {
        imagesBlock.style.transform = `translateX(-${amount - step}px)`;
        amount -= step;
        if (amount === 0) {
          rightArrow.style.display = 'flex';
          leftArrow.style.display = 'none';
        }
      }
    }

  });

  //слайдер мобайл
  if (document.documentElement.clientWidth < 576) {

    const length = document.querySelectorAll('.portfolio-slides-box .portfolio-slider__slide-frame').length;

    let currentSlide = 1;

    updateSliderCounter('portfolio-counter', currentSlide, length);

    portfolioSection.addEventListener('click', (e) => {
      const target = e.target;

      if (target.closest('#portfolio-arrow-mobile_left')) {
        if (currentSlide !== 1) {
          currentSlide--;
          updateSliderCounter('portfolio-counter', currentSlide, length);
        }
      }

      if (target.closest('#portfolio-arrow-mobile_right')) {
        if (currentSlide !== length) {
          currentSlide++;
          updateSliderCounter('portfolio-counter', currentSlide, length);
        }
      }
    });


    document.querySelectorAll('.slider-arrow-tablet-mobile').forEach(element => element.removeAttribute('disabled'));
    const newSlider = new Carousel({
      className: 'portfolio',
      main: '.portfolio-slider-mobile',
      wrapper: '.portfolio-slides-box',
      next: '#portfolio-arrow-mobile_right',
      prev: '#portfolio-arrow-mobile_left',
      slidesToShow: 1,
    });

    newSlider.init();

  }




  document.addEventListener('click', (e) => {
    const target = e.target;

    //слайдер в попап
    if (target.classList.contains('portfolio-slider__slide-frame')) {
      showPopup(portfolioPopup);

      currentPopupSlide = +target.dataset.index;
      // console.log('currentPopupSlide', currentPopupSlide);
      showPopupsText(currentPopupSlide);
      updateSliderCounter('popup-portfolio-counter', currentPopupSlide + 1, popupTexts.length);

      const popupCarousel = new Carousel({
        className: 'portfolioPopup',
        main: '.popup-portfolio-slider-wrap',
        wrapper: '.popup-portfolio-slider',
        next: '#popup_portfolio_right',
        prev: '#popup_portfolio_left',
        position: currentPopupSlide,
        slidesToShow: 1,
      });
      popupCarousel.init();
    }

  });

  portfolioPopup.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('#popup_portfolio_right')) {
      if (currentPopupSlide !== popupTexts.length - 1) {
        currentPopupSlide++;
        showPopupsText(currentPopupSlide);
        updateSliderCounter('popup-portfolio-counter', currentPopupSlide + 1, popupTexts.length);
      }
    }

    if (target.closest('#popup_portfolio_left')) {
      if (currentPopupSlide !== 0) {
        currentPopupSlide--;
        showPopupsText(currentPopupSlide);
        updateSliderCounter('popup-portfolio-counter', currentPopupSlide + 1, popupTexts.length);
      }
    }
  });

};

export default portfolioSlider;
