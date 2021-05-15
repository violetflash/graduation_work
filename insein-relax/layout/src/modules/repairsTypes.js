import Carousel from './carousel';

const repairsTypes = () => {

  const tabHeader = document.querySelector('.nav-list-repair'),
    tabs = document.querySelectorAll('.repair-types-nav__item'),
    tabContent = document.querySelectorAll('.repair-types-content'),
    slider = document.querySelector('.repair-types'),
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

      if (currentSlide !== slides.length - 1) {
        currentSlide++;
      }
    } else if (target.closest('#repair-types-arrow_left')) {

      if (currentSlide !== 0) {
        currentSlide--;
      }
    }

    updateSliderCounter(currentSlide + 1, slides.length);
    showElement(slides, currentSlide, 'slider-item-active');
  });


  if (document.documentElement.clientWidth < 1024) {

    const tabsCarousel = new Carousel({
      main: '.repair-types-nav',
      wrapper: '.nav-list-repair',
      next: '#nav-arrow-repair-right_base',
      prev: '#nav-arrow-repair-left_base',
      responsive: [
        {
          breakpoint: 1024,
          slidesToShow: 3
        },
        {
          breakpoint: 768,
          slidesToShow: 2
        },
        {
          breakpoint: 576,
          slidesToShow: 1
        }
      ],
    });

    tabsCarousel.init();

    const lockElement = (elem) => {
      elem.setAttribute('disabled', 'true');
    };

    const unlockElement = (elem) => {
      elem.removeAttribute('disabled');
    };

    const tabHeader = document.querySelector('.repair-types-tab'),
      tabs = document.querySelectorAll('.repair-types-nav__item'),
      leftArrow = document.getElementById('nav-arrow-repair-left_base'),
      rightArrow = document.getElementById('nav-arrow-repair-right_base');

    const getActiveIndex = (array) => {
      let idx;
      array.forEach((element, index) => {
        if (element.classList.contains('active')) {
          idx = index;
        }
      });
      return idx;
    };


    const checkArrows = () => {
      if (getActiveIndex(tabs) === tabs.length - 1) {
        lockElement(rightArrow);
      } else {
        unlockElement(rightArrow);
      }

      if (getActiveIndex(tabs) === 0) {
        lockElement(leftArrow);
      } else {
        unlockElement(leftArrow);
      }
    };

    // checkArrows();

    tabHeader.addEventListener('click', (e) => {
      let target = e.target;

      if (!target.closest('.nav-arrow')) {
        return;
      }

      if (target.closest('#nav-arrow-repair-right_base')) {
        const index = getActiveIndex(tabs);
        if (index !== tabs.length - 1) {
          tabs[index].classList.remove('active');
          tabs[index + 1].classList.add('active');
          tabContent[index].classList.add('d-none');
          tabContent[index + 1].classList.remove('d-none');
          selectedSliderIndex = index + 1;
          currentSlide = 0;
          updateSliderCounter(1, tabContent[index + 1].children.length);
        }
      }

      if (target.closest('#nav-arrow-repair-left_base')) {
        const index = getActiveIndex(tabs);
        if (index - 1 !== -1) {
          tabs[index].classList.remove('active');
          tabs[index - 1].classList.add('active');
          tabContent[index].classList.add('d-none');
          tabContent[index - 1].classList.remove('d-none');
          selectedSliderIndex = index - 1;
          currentSlide = 0;
          updateSliderCounter(1, tabContent[index - 1].children.length);
        }
      }

    });
  }
};

export default repairsTypes;
