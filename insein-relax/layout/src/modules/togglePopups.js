//их несколько
const togglePopups = () => {
  const repairPopup = document.querySelector('.popup-repair-types');



  document.addEventListener('click', (e) => {
    const target = e.target;




    if (target.closest('.link-list-menu')) {
      repairPopup.style.visibility = 'visible';
      repairPopup.style.transform = 'translateY(0)';
      repairPopup.style.opacity = 1;
      document.body.style.overflow = 'hidden';
    }

    // if ()
  });

};

export default togglePopups;
