const timeoutedDisplayBlock = () => {

  //решается проблема появления летающих и исчезающих блоков при загрузке страницы
  const menu = document.querySelector('.popup-dialog-menu'),
    privacyPopup = document.querySelector('.popup-dialog-privacy'),
    repairPopup = document.querySelector('.popup-repair-types');


  const block = [menu, privacyPopup];
  const flex = [repairPopup];

  let timeoutID;

  timeoutID = setTimeout(() => {
    block.forEach(element => element.style.display = 'block');
    flex.forEach(element => element.style.display = 'flex');
    clearTimeout(timeoutID);
    timeoutID = null;
  }, 1000);

};

export default timeoutedDisplayBlock;
