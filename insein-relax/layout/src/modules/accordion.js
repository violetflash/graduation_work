import addSmoothScroll from "./addSmoothScroll";

const accordion = () => {
  const accordionsBlock = document.querySelector('.accordion'),
    buttons = document.querySelectorAll('.accordion .title_block'),
    panels = document.querySelectorAll('.msg');


  const removeElementsClass = (array, className) => {
    array.forEach(elem => elem.classList.remove(className));
  };

  const hideElements = (array) => {
    array.forEach(elem => {
      elem.style.maxHeight = 0;
      elem.style.opacity = 0;
    });
  };

  const checkPanel = (panel, target, activeClass) => {
    hideElements(panels);
    if (target.classList.contains(activeClass)) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      panel.style.opacity = 1;
    }
  };

  panels.forEach((elem, index) => {
    if (index === 0) {
      return;
    }

    elem.style.maxHeight = 0;
  });

  document.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.title_block')) {
      removeElementsClass(buttons, 'msg-active');
      target.classList.add('msg-active');
      const panel = target.nextElementSibling;
      checkPanel(panel, target, 'msg-active');
    }
  });

};

export default accordion;
