
const toggleMenu = () => {
  const menuWrapper = document.querySelector('.popup-menu'),
    menu = menuWrapper.querySelector('.popup-dialog-menu');


  //Блокировка прокрутки при открытом меню
  //TODO избавиться от скачка при появлении скроллбара


  const openMenu = () => {
    menuWrapper.style.visibility = 'visible';
    menu.style.transform = 'translate3d(0, 0, 0)';
    menu.style.visibility = 'visible';
    document.body.classList.add('js-locked');
  };

  const closeMenu = () => {
    menuWrapper.style.visibility = 'hidden';
    menu.style.transform = 'translate3d(645px, 0, 0)';
    menu.style.visibility = 'hidden';
    document.body.classList.remove('js-locked');
  };

  document.addEventListener('click', (e) => {
    let target = e.target;
    if (target.closest('.menu')) {
      openMenu();
      return;
    }

    //исключаем само меню и <a> внутри него
    if (target.closest('.close-menu') || target.closest('.popup-menu-main a')) {
      closeMenu();
      return;
    }

    target = target.closest('.popup-dialog-menu');
    // если клик не по меню
    if (!target) {
      closeMenu();
    }

  });
};

export default toggleMenu;


