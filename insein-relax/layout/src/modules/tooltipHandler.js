//TODO ЧТО С ТУЛТИПАМИ В СЛАЙДЕРЕ? Как и когда они показываются

import Carousel from './carousel';

const tooltipHandler = () => {
  const formulaSection = document.getElementById('formula');

  if (document.documentElement.clientWidth > 1024) {
    formulaSection.addEventListener('mouseover', (e) => {
      let target = e.target;

      if (target.closest('.formula-item')) {
        target = target.closest('.formula-item');
        const itemHeight = target.clientHeight;
        const tooltip = target.querySelector('.formula-item-popup');
        // console.log(tooltip.getBoundingClientRect().top)
        const tooltipHeight = tooltip.clientHeight;
        // const tooltipBottom = window.innerHeight - tooltip.getBoundingClientRect().top - tooltip.offsetHeight;
        // const distanceBetween = tooltipBottom - target.getBoundingClientRect().top;
        const distance = itemHeight + tooltipHeight + 20;
        const row = target.closest('.row');


        if (target.getBoundingClientRect().top < tooltipHeight + 20) {
          target.classList.add('js-inversed');
          row.classList.add('js-index');
          tooltip.style.transform = `translateY(${distance}px)`;
        } else {
          target.classList.remove('js-inversed');
          tooltip.style.transform = `translateY(0)`;
        }

        target.classList.add('active-item');
      }
    });

    formulaSection.addEventListener('mouseout', (e) => {
      let target = e.target;

      if (target.closest('.formula-item')) {
        target = target.closest('.formula-item');
        const row = target.closest('.row');
        row.classList.remove('js-index');
        target.classList.remove('active-item');
      }
    });

  }

  if (document.documentElement.clientWidth > 768 && document.documentElement.clientWidth < 1024) {
    const sliderWrapper = document.querySelector('.formula-slider');
    const divElement1 = document.createElement('div');
    divElement1.className = 'formula-item empty';
    sliderWrapper.appendChild(divElement1);
    const divElement2 = document.createElement('div');
    divElement2.className = 'formula-item empty';
    sliderWrapper.prepend(divElement2);

  } else {

    if (document.querySelector('.formula-item .empty')) {
      document.querySelectorAll('.formula-item .empty').forEach(element => element.remove());
    }

  }

  const formulaSlider = new Carousel({
    className: 'formula',
    main: '.formula-slider-wrap',
    wrapper: '.formula-slider',
    next: '#formula-arrow_right',
    prev: '#formula-arrow_left',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1024,
        slidesToShow: 3
      },
      {
        breakpoint: 768,
        slidesToShow: 1
      },
      {
        breakpoint: 576,
        slidesToShow: 1
      }
    ],
  });

  formulaSlider.init();


  const formulaItems = document.querySelectorAll('.formula-slider__slide');
  const maxLength = formulaItems.length;

  let activeItemIndex = 0;
  formulaItems[activeItemIndex].classList.add('active-item');

  const slideNext = (array, currentIndex, activeClassName) => {
    array[currentIndex].classList.remove(activeClassName);
    array[currentIndex + 1].classList.add(activeClassName);
  };

  const slidePrev = (array, currentIndex, activeClassName) => {
    array[currentIndex].classList.remove(activeClassName);
    array[currentIndex - 1].classList.add(activeClassName);
  };


  formulaSection.addEventListener('click', (e) => {
    let target = e.target;
    if (!target.closest('.slider-arrow')) {
      return;
    }

    if (target.closest('#formula-arrow_right')) {
      if (activeItemIndex + 1 < maxLength) {
        slideNext(formulaItems, activeItemIndex, 'active-item');
        activeItemIndex++;
      }

    }

    if (target.closest('#formula-arrow_left')) {
      if (activeItemIndex - 1 > -1) {
        slidePrev(formulaItems, activeItemIndex, 'active-item');
        activeItemIndex--;
      }
    }

  });





};

export default tooltipHandler;
