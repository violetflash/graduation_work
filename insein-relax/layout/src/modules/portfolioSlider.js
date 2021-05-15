import Carousel from './carousel';

const portfolioSlider = () => {
  const portfolioSection = document.getElementById('portfolio'),
    rightArrow = document.getElementById('portfolio-arrow_right'),
    leftArrow = document.getElementById('portfolio-arrow_left'),
    imagesBlock = document.querySelector('.portfolio-slider-slides-box'),
    imagesBlockWidth = imagesBlock.clientWidth,
    slides = document.querySelectorAll('.portfolio-slider__slide'),
    slideWidth = document.querySelector('.portfolio-slider__slide').clientWidth,
    slidesNum = slides.length,
    fullwidth = slidesNum * slideWidth;

  let movedDistance = imagesBlockWidth,
    step = slideWidth,
    counter = 1,
    amount = 0;



  portfolioSection.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('#portfolio-arrow_right')) {

      if (movedDistance <= fullwidth) {
        amount = step * counter;

        imagesBlock.style.transform = `translateX(-${amount}px)`;
        counter++;
        movedDistance = imagesBlockWidth + step * counter;
        if (movedDistance >= fullwidth) {
          movedDistance = fullwidth;
          rightArrow.style.display = 'none';
          leftArrow.style.display = 'flex';
          counter = 1;
        }
      }
    }

    if (target.closest('#portfolio-arrow_left')) {

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


  // arrowRight.addEventListener('click', () => {
  //   imagesBlock.style.transform = 'translateX(-352px)';
  // });


};

export default portfolioSlider;
