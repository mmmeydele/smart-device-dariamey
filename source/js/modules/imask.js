import IMask from 'imask';

let phoneInput = document.querySelector('.phone');

// Создаем маску в инпуте
const phoneMask = new IMask(phoneInput, {
  mask: '+{7}(000)000-00-00',
});

let modalPhone = document.querySelector('.modal__phone');

const modalMask = new IMask(modalPhone, {
  mask: '+{7}(000)000-00-00',
});


export {phoneMask, modalMask};
