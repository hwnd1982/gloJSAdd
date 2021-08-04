'use strict';

let lang = confirm('a) Отбразить данные на русском?') ? 'ru' : 'en',
  daysOfWeek  = {
    en: [ 'Monday',	'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ],
    ru: [ 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье' ]
  },
  namePerson;

console.log('Решение a:');
if (lang === 'ru') {
  console.log(...daysOfWeek.ru);
}
if (lang === 'en') {
  console.log(...daysOfWeek.en);
}

console.log('Решение b:');
lang = confirm('b) Отбразить данные на русском?') ? 'ru' : 'en';
switch (lang) {
  case 'ru':  
    console.log(...daysOfWeek.ru);
    break;
  case 'en':
    console.log(...daysOfWeek.en);
}

console.log('Решение c:');
lang = confirm('c) Отбразить данные на русском?') ? 'ru' : 'en';
console.log(...daysOfWeek[lang]);

namePerson = prompt('Введите имя:');
console.log(`${!namePerson ? 'Вы ничего не ввели...' : 
  namePerson === 'Артем' ? namePerson + ' - директор' :
  namePerson === 'Максим' ? namePerson + ' - преподаватель' :
  namePerson + ' - студент'}`);