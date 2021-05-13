
const addSmoothScroll = () => {
  const scrollBtn = document.querySelector('a[href="#main"]'),
    menu = document.querySelector('.popup-dialog-menu'),
    menuLinks = menu.querySelectorAll('a');

  function scroll(e) {
    e.scrollIntoView({behavior: "smooth", block: "start"});
  }

  [...menuLinks, scrollBtn].forEach((elem) => {

    elem.addEventListener('click', function(e) {
      const element = this.getAttribute('href');
      if (element === '#') {
        return;
      }
      e.preventDefault();

      const anchor = document.querySelector(`${element}`);
      scroll(anchor);
    });
  });
};

export default addSmoothScroll;
