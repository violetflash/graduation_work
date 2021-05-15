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
    counter = 1;



  portfolioSection.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('#portfolio-arrow_right')) {

      if (movedDistance <= fullwidth) {
        imagesBlock.style.transform = `translateX(-${step * counter}px)`;
        counter++;
        movedDistance = imagesBlockWidth + step * counter;
        if (movedDistance >= fullwidth) {
          console.log(movedDistance);
          rightArrow.style.display = 'none';
          leftArrow.style.display = 'flex';
          counter = 1;
        }
      }
    }

    if (target.closest('#portfolio-arrow_left')) {

      if (movedDistance > imagesBlockWidth) {
        console.log(movedDistance);
        imagesBlock.style.transform = `translateX(${step * counter}px)`;
        counter++;
        movedDistance -= step * counter;
        console.log(movedDistance);

        // if (movedDistance >= fullwidth) {
        //   rightArrow.style.display = 'none';
        //   leftArrow.style.display = 'flex';
        // }
      }
    }

  });


  // arrowRight.addEventListener('click', () => {
  //   imagesBlock.style.transform = 'translateX(-352px)';
  // });


};

export default portfolioSlider;
