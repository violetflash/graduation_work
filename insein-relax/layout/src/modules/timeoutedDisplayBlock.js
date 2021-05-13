const timeoutedDisplayBlock = () => {
  const menu = document.querySelector('.popup-dialog-menu'),
    repairPopup = document.querySelector('.popup-repair-types');


  const block = [menu];
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
