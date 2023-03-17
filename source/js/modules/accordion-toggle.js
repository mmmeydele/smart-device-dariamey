const accToggle = document.querySelector('.accordion__toggle');
const accElement = document.querySelector('.accordion__element');
const accButton = document.querySelector('.accordion__button');

const togglePlus = accButton.addEventListener('click', function () {
  if (accElement.classList.contains('is-active')) {
    accToggle.classList.remove('accordion__toggle--closed');
    accToggle.classList.add('accordion__toggle--opened');
  } else {
    accToggle.classList.remove('accordion__toggle--opened');
    accToggle.classList.add('accordion__toggle--closed');
  }
});

export { togglePlus };
