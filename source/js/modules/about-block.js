let btnFull = document.querySelector('.about__button--full');
let btnCollapse = document.querySelector('.about__button--collapse');
let descriptionFull = document.querySelector('.about__description--full');

const aboutFull = btnFull.addEventListener('click', function () {
  descriptionFull.classList.remove('visually-hidden');
  btnCollapse.classList.remove('visually-hidden');
  btnFull.classList.add('visually-hidden');
});

const aboutCollapse = btnCollapse.addEventListener('click', function () {
  descriptionFull.classList.add('visually-hidden');
  btnCollapse.classList.add('visually-hidden');
  btnFull.classList.remove('visually-hidden');
});


export {aboutFull, aboutCollapse};
