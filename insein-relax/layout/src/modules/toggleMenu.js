
const toggleMenu = () => {
  const menuWrapper = document.querySelector('.popup-menu'),
    menu = menuWrapper.querySelector('.popup-dialog-menu');


  const openMenu = () => {
    menuWrapper.style.visibility = 'visible';
    // const styles = window.getComputedStyle(menu).transform;
    menu.style.transform = 'translate3d(0, 0, 0)';
  };

  const closeMenu = () => {
    menuWrapper.style.visibility = 'hidden';
  };

  document.addEventListener('click', (e) => {
    let target = e.target;
    if (target.closest('.menu')) {
      openMenu();
    } else {
      //исключаем само меню и li внутри него
      if (target.closest('.menu') && target.hasAttribute('href') && target !== menu) {
        closeMenu();
      }
      target = target.closest('.menu');
      //если клик не по меню
      if (!target) {
        menuWrapper.style.visibility = 'hidden';
      }
    }
  });
};

export default toggleMenu;


