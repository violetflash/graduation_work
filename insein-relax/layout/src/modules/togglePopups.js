//их несколько
const togglePopups = () => {
  const repairPopup = document.querySelector('.popup-repair-types');

  document.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.link-list-menu') || target.closest('.link-list-repair')) {
      repairPopup.style.visibility = 'visible';
      repairPopup.style.transform = 'translateY(0)';
      repairPopup.style.opacity = 1;
      document.body.style.overflow = 'hidden';
      return;
    }

    if (target.classList.contains('close') && target.closest('.popup-repair-types')) {
      repairPopup.style.visibility = 'hidden';
      repairPopup.style.transform = 'translateY(10px)';
      repairPopup.style.opacity = 0;
      document.body.style.overflow = 'visible';
      return;
    }




  });

};

export default togglePopups;
