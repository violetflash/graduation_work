import Carousel from './carousel';

const portfolioSlider = () => {
  const portfolioSection = document.getElementById('portfolio'),
    rightArrow = document.getElementById('portfolio-arrow_right'),
    leftArrow = document.getElementById('portfolio-arrow_left'),
    imagesBlock = document.querySelector('.portfolio-slider-slides-box'),
    sliderWrapper = document.querySelector('.portfolio-slider'),
    imagesBlockWidth = imagesBlock.clientWidth,
    slides = document.querySelectorAll('.portfolio-slider__slide'),
    slidesNum = slides.length,
    portfolioPopup = document.querySelector('.popup-portfolio');

  let movedDistance = imagesBlockWidth,
    step = 0,
    counter = 1,
    amount = 0,
    fullwidth = 0;

  const showPopup = (popup) => {
    popup.style.visibility = 'visible';
    popup.style.transform = 'translateY(0)';
    popup.style.opacity = 1;
    // document.body.style.overflow = 'hidden';
  };

  const hidePopup = (popup) => {
    popup.style.visibility = 'hidden';
    popup.style.transform = 'translateY(10px)';
    popup.style.opacity = 0;
    // document.body.style.overflow = 'visible';
  };

  const slideWidth = document.querySelector('.portfolio-slider__slide').clientWidth;

  step = slideWidth;
  fullwidth = slidesNum * slideWidth;
  console.log('movedDistance:', movedDistance);


  portfolioSection.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('#portfolio-arrow_right')) {
      fullwidth = slidesNum * slideWidth;
      console.log('step:', step);


      if (movedDistance< fullwidth) {
        amount = step * counter;
        console.log('amount', amount);

        imagesBlock.style.transform = `translateX(-${amount}px)`;
        counter++;
        movedDistance += step + 5;  //5 - погрешность от округления
        console.log(movedDistance, 'of', fullwidth);

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
      console.log('slideWidth:', slideWidth);
      console.log('fullwidth', fullwidth);


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

  if (document.documentElement.clientWidth < 576) {

    const sliderCounterCurrent = document.querySelector('#portfolio-counter .slider-counter-content__current'),
      sliderCounterTotal = document.querySelector('#portfolio-counter .slider-counter-content__total'),
      prevArrow = document.getElementById('portfolio-arrow-mobile_left'),
      nextArrow = document.getElementById('portfolio-arrow-mobile_right'),
      length = document.querySelectorAll('.portfolio-slides-box .portfolio-slider__slide-frame').length;

    const updateSliderCounter = (current, total) => {
      sliderCounterCurrent.textContent = current;
      sliderCounterTotal.textContent = total;
    };

    let currentSlide = 1;

    updateSliderCounter(currentSlide, length);

    portfolioSection.addEventListener('click', (e) => {
      const target = e.target;

      if (target.closest('#portfolio-arrow-mobile_left')) {
        if (currentSlide !== 1) {
          currentSlide--;
          updateSliderCounter(currentSlide, length);
        }
      }

      if (target.closest('#portfolio-arrow-mobile_right')) {
        if (currentSlide !== length) {
          currentSlide++;
          updateSliderCounter(currentSlide, length);
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

  portfolioSection.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('portfolio-slider__slide-frame')) {
      showPopup(portfolioPopup);
    }

    if (target.classList.contains('close') && target.closest('.popup-portfolio')) {
      hidePopup(portfolioPopup);
      return;
    }
  });

};

export default portfolioSlider;
