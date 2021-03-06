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

    if (target.classList.contains('close') && target.closest('.popup-repair-types') || !target.closest('.popup-dialog-repair-types')) {
      hidePopup(repairPopup);
    }

    if (target.closest('.link-privacy')) {
      privacyPopup.style.visibility = 'visible';
      showPopup(privacyBlock);
      return;
    }

    if (target.classList.contains('close') && target.closest('.popup-privacy') || !target.closest('.popup-dialog-privacy')) {
      privacyPopup.style.visibility = 'hidden';
      hidePopup(privacyBlock);
    }

    if (target.classList.contains('close') && target.closest('.popup-portfolio') || !target.closest('.popup-dialog-portfolio')) {
      hidePopup(portfolioPopup);
    }

    if (target.classList.contains('transparency-item__img')) {
      target = target.closest('.transparency-item');
      transparencyPopup.style.display = 'flex';
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
      return;
    }

    if (target.closest('#transparency_right')) {

      if (currentSlide + 1 !== transparencyslength) {
        currentSlide++;
        updateSliderCounter('transparency-popup-counter', currentSlide + 1, transparencyslength);
      }
      return;
    }

    if (target.closest('#transparency_left')) {

      if (currentSlide !== 0) {
        currentSlide--;
        updateSliderCounter('transparency-popup-counter', currentSlide + 1, transparencyslength);
      }
      return;
    }


    if (target.classList.contains('close') && target.closest('.popup-transparency') || !target.closest('.popup-dialog-transparency')) {
      transparencyPopup.style.display = 'none';
      hidePopup(transparencyPopup);
    }


    if (target.closest('.button_wide')) {
      showPopup(popupConsultation);
      return;
    }

    if (target.classList.contains('close') && target.closest('.popup-consultation') || !target.closest('.feedback-wrap')) {
      hidePopup(popupConsultation);

    }


    if (target.classList.contains('close') && target.closest('.popup-thank')) {
      hidePopup(successPopup);
      hidePopup(popupConsultation);
      return;
    }

  });

};

export default togglePopups;
