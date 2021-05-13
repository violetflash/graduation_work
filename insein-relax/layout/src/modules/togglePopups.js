//их несколько
const togglePopups = () => {

  document.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.link-list-menu')) {
      console.log('hit');
    }
  });

};

export default togglePopups;
