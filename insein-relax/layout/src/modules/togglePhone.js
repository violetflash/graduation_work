const togglePhone = () => {
  const mainPhone = document.querySelector('.header-contacts__phone-number-wrap'),
    hiddenPhone = document.querySelector('.header-contacts__phone-number-accord a');


  document.addEventListener('click', (e) => {
    let target = e.target;

    //Phone show/hide
    if (target.closest('.header-contacts__arrow')) {
      target = document.querySelector('.header-contacts__arrow');
      const moveAmount = mainPhone.scrollHeight;
      const panel = target.previousElementSibling.querySelector('.header-contacts__phone-number-accord');

      if (target.classList.contains('js-opened')) {
        target.style.transform = 'scale(1.2)';
        panel.style.transform = `translateY(0)`;
        hiddenPhone.style.opacity = 0;
        target.classList.remove('js-opened');
        return;
      }

      target.classList.add('js-opened');
      target.style.transform = 'scale(-1.2)';
      panel.style.transform = `translateY(${moveAmount}px)`;
      hiddenPhone.style.opacity = 1;
    }
  });


};

export default togglePhone;
