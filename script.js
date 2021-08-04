'use strict';

const getFormattedString = (str) => {
  if (typeof str !== 'string') {
    return 'Ошибка: переданые данные не являются строкой!'
  } else {
    if (!str.trim()) {
      return 'Ошибка: передана пустая строка!'
    } else {
      return str.trim().length <=30 ? str.trim() : str.trim().slice(0,30) + '...';
    }
  }
};

console.log(getFormattedString(prompt('Введите текст сообщения:')));
