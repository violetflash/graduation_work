const removeRequiredAttr = () => {
  const forms = document.querySelectorAll('form');
  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');
    inputs.forEach((element) => {
      if (element.type.toLowerCase() === 'button') {
        return;
      }
      element.required = false;
    });
  });
};

export default removeRequiredAttr;
