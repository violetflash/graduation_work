
const tooltipHandler = () => {
  const formulaSection = document.getElementById('formula');

  formulaSection.addEventListener('mouseover', (e) => {
    let target = e.target;

    if (target.closest('.formula-item')) {
      target = target.closest('.formula-item');
      const itemHeight = target.scrollHeight;
      const tooltip = target.querySelector('.formula-item-popup');
      // console.log(tooltip.getBoundingClientRect().top)
      const tooltipHeight = tooltip.scrollHeight;
      // const tooltipBottom = window.innerHeight - tooltip.getBoundingClientRect().top - tooltip.offsetHeight;
      // const distanceBetween = tooltipBottom - target.getBoundingClientRect().top;
      target.classList.add('js-inversed');

      if (target.getBoundingClientRect().top > tooltipHeight + 10) {

        target.classList.remove('js-inversed');
      }

      target.classList.add('active-item');
    }
  });

  formulaSection.addEventListener('mouseout', (e) => {
    let target = e.target;

    if (target.closest('.formula-item')) {
      target = target.closest('.formula-item');

      // target.classList.remove('active-item');
    }
  });
};

export default tooltipHandler;
