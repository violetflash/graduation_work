
const repairsTypes = () => {

  const tabHeader = document.querySelector('.nav-list-repair'),
    tabs = document.querySelectorAll('.repair-types-nav__item'),
    tabContent = document.querySelectorAll('.repair-types-content'),
    slider = document.querySelector('.repair-types-slider-wrap'),
    sliderCounterCurrent = document.querySelector('.slider-counter-repair .slider-counter-content__current'),
    sliderCounterTotal = document.querySelector('.slider-counter-repair .slider-counter-content__total');

  let selectedSliderIndex = 0;
  let slides = tabContent[selectedSliderIndex].querySelectorAll('.repair-types-slider__slide');
  let currentSlide = 0;

  const updateSliderCounter = (current, total) => {
    sliderCounterCurrent.textContent = current;
    sliderCounterTotal.textContent = total;
  };

  updateSliderCounter(currentSlide + 1, slides.length);

  const hideElement = (elem, index, activeClass) => {
    elem[index].classList.remove(activeClass);
  };

  const showElement = (elem, index, activeClass) => {
    elem[index].classList.add(activeClass);
  };

  const toggleTabContent = index => {
    for (let i = 0; i < tabContent.length; i++) {

      if (index === i) {
        tabs[i].classList.add('active');
        tabContent[i].classList.remove('d-none');

      } else {
        tabs[i].classList.remove('active');
        tabContent[i].classList.add('d-none');
      }
    }
  };

  tabHeader.addEventListener('click', e => {
    let target = e.target;
    target = target.closest('.repair-types-nav__item');
    if (target) {
      tabs.forEach((item, index) => {
        if (target === item) {
          toggleTabContent(index);
          selectedSliderIndex = index;
          currentSlide = 0;
          slides = tabContent[selectedSliderIndex].querySelectorAll('.repair-types-slider__slide');
          updateSliderCounter(currentSlide + 1, slides.length);
        }
      });
    }
  });

  slider.addEventListener('click', event => {
    event.preventDefault();

    const target = event.target;

    if (!target.closest('.slider-arrow')) {
      return;
    }

    slides = tabContent[selectedSliderIndex].querySelectorAll('.repair-types-slider__slide');

    hideElement(slides, currentSlide, 'slider-item-active');

    if (target.closest('#repair-types-arrow_right')) {
      currentSlide++;
      if (currentSlide === slides.length) {
        currentSlide = 0;
      }
    } else if (target.closest('#repair-types-arrow_left')) {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
    }

    updateSliderCounter(currentSlide + 1, slides.length);
    showElement(slides, currentSlide, 'slider-item-active');
  });
};

export default repairsTypes;
