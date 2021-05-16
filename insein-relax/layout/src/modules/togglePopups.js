import Carousel from "./carousel";
import {updateSliderCounter, setDataIndexes, showPopup, hidePopup, getDatasetIndex} from './utils';

const togglePopups = () => {
  const repairPopup = document.querySelector('.popup-repair-types'),
    privacyPopup = document.querySelector('.popup-privacy'),
    privacyBlock = document.querySelector('.popup-dialog-privacy'),
    portfolioPopup = document.querySelector('.popup-portfolio'),
    transparencyPopup = document.querySelector('.popup-transparency'),
    transparencyItems = document.querySelectorAll('.transparency-item'),
    transparencyslength = transparencyItems.length,
    popupConsultation = document.querySelector('.popup-consultation'),
    successPopup = document.querySelector('.popup-thank');



  let currentSlide = 0;

  setDataIndexes([transparencyItems]);

  document.addEventListener('click', (e) => {
    let target = e.target;

    if (target.closest('.link-list-menu') || target.closest('.link-list-repair')) {
      showPopup(repairPopup);
      return;
    }

    if (target.classList.contains('close') && target.closest('.popup-repair-types')) {
      hidePopup(repairPopup);
      return;
    }

    if (target.classList.contains('link-privacy')) {
      privacyPopup.style.visibility = 'visible';
      showPopup(privacyBlock);
      return;
    }

    if (target.classList.contains('close') && target.closest('.popup-privacy')) {
      privacyPopup.style.visibility = 'hidden';
      hidePopup(privacyBlock);
      return;
    }

    if (target.classList.contains('close') && target.closest('.popup-portfolio')) {
      hidePopup(portfolioPopup);
      return;
    }

    if (target.classList.contains('transparency-item__img')) {

      target = target.closest('.transparency-item');
      showPopup(transparencyPopup);
      currentSlide = getDatasetIndex(target);
      updateSliderCounter('transparency-popup-counter', currentSlide + 1, transparencyslength);

      const transparencySlider = new Carousel({
        className: 'transparency',
        main: '.popup-transparency-slider',
        wrapper: '.transparency-box',
        next: '#transparency_right',
        prev: '#transparency_left',
        slidesToShow: 1,
        position: currentSlide,
      });

      transparencySlider.init();

    }

    if (target.closest('#transparency_right')) {

      if (currentSlide + 1 !== transparencyslength) {
        currentSlide++;
        updateSliderCounter('transparency-popup-counter', currentSlide + 1, transparencyslength);
      }
    }

    if (target.closest('#transparency_left')) {

      if (currentSlide !== 0) {
        currentSlide--;
        updateSliderCounter('transparency-popup-counter', currentSlide + 1, transparencyslength);
      }
    }


    if (target.classList.contains('close') && target.closest('.popup-transparency')) {
      hidePopup(transparencyPopup);
      return;
    }

    if (target.closest('.button_wide')) {
      showPopup(popupConsultation);
    }

    if (target.classList.contains('close') && target.closest('.popup-consultation')) {
      hidePopup(popupConsultation);
      return;
    }


    if (target.classList.contains('close') && target.closest('.popup-thank')) {
      hidePopup(successPopup);
      hidePopup(popupConsultation);
      return;
    }

  });

};

export default togglePopups;
