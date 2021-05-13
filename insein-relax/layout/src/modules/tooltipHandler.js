//TODO z index

const tooltipHandler = () => {
  const formulaSection = document.getElementById('formula');

  formulaSection.addEventListener('mouseover', (e) => {
    let target = e.target;

    if (target.closest('.formula-item')) {
      target = target.closest('.formula-item');
      const itemHeight = target.clientHeight;
      console.log(itemHeight)
      const tooltip = target.querySelector('.formula-item-popup');
      // console.log(tooltip.getBoundingClientRect().top)
      const tooltipHeight = tooltip.clientHeight;
      // const tooltipBottom = window.innerHeight - tooltip.getBoundingClientRect().top - tooltip.offsetHeight;
      // const distanceBetween = tooltipBottom - target.getBoundingClientRect().top;
      const distance = itemHeight + tooltipHeight + 20;


      if (target.getBoundingClientRect().top < tooltipHeight + 20) {
        target.classList.add('js-inversed');
        tooltip.style.transform = `translateY(${distance}px)`;
      } else {
        target.classList.remove('js-inversed');
        tooltip.style.transform = `translateY(0)`;

      }

      target.classList.add('active-item');
    }
  });

  formulaSection.addEventListener('mouseout', (e) => {
    let target = e.target;

    if (target.closest('.formula-item')) {
      target = target.closest('.formula-item');

      target.classList.remove('active-item');
    }
  });
};

export default tooltipHandler;
