import Carousel from "./carousel";

const testimonials = () => {
  const reviewsSection = document.getElementById('reviews'),
    leftArrow = document.getElementById('reviews-arrow_left'),
    rightArrow = document.getElementById('reviews-arrow_right'),
    reviewsLength = document.querySelectorAll('.reviews-slider-box .reviews-slider__slide').length;

  let activeSlide = 0;

  const transparencySlider = new Carousel({
    className: 'reviews',
    main: '.reviews-slider',
    wrapper: '.reviews-slider-box',
    next: '#reviews-arrow_right',
    prev: '#reviews-arrow_left',
    slidesToShow: 1,
  });

  transparencySlider.init();
  leftArrow.style.display = 'none';

  reviewsSection.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('#reviews-arrow_right')) {
      if (activeSlide + 1 !== reviewsLength) {
        activeSlide++;
        leftArrow.style.display = 'flex';
        if (activeSlide + 1 === reviewsLength) {
          rightArrow.style.display = 'none';
        }
      }
    }

    if (target.closest('#reviews-arrow_left')) {
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

export default testimonials;
