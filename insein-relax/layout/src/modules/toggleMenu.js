
const toggleMenu = () => {
  const menuWrapper = document.querySelector('.popup-menu'),
    menu = menuWrapper.querySelector('.popup-dialog-menu');

  //TODO избавиться от скачка при появлении скроллбара

  const openMenu = () => {
    menuWrapper.style.visibility = 'visible';
    menu.classList.add('js-opened-burger');
    document.body.classList.add('js-locked');
  };

  const closeMenu = () => {
    menuWrapper.style.visibility = 'hidden';
    menu.classList.remove('js-opened-burger');
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


