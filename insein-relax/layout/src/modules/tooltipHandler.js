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

  const formulaSlider = new Carousel({
    main: '.formula-slider-wrap',
    wrapper: '.formula-slider',
    next: '#formula-arrow_right',
    prev: '#formula-arrow_left',
    slidesToShow: 3,
  });

  formulaSlider.init();
  const formulaItems = document.querySelectorAll('.formula-item');

  formulaSection.addEventListener('click', (e) => {
    let target = e.target;
    if (target.closest('.formula-item')) {
      target = target.closest('.formula-item');
      formulaItems.forEach(elem => elem.classList.remove('active-item'));
      target.classList.add('active-item');
    }
  });

};

export default tooltipHandler;
