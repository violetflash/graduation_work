//их несколько
const togglePopups = () => {
  const repairPopup = document.querySelector('.popup-repair-types'),
    privacyPopup = document.querySelector('.popup-privacy'),
    privacyBlock = document.querySelector('.popup-dialog-privacy');

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

  document.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.link-list-menu') || target.closest('.link-list-repair')) {
      showPopup(repairPopup);
      return;
    }

    if (target.classList.contains('close') && target.closest('.popup-repair-types')) {
      console.log('hit!')
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



  });

};

export default togglePopups;
