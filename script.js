'use strict';

let lang = 'ru',
  daysOfWeek  = {
    en: [
      'Monday',	
      'Tuesday',	
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    ru: [
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
      'Воскресенье'
    ]
  },
  namePerson = 'Артем';

console.log('Решение a:');
if (lang === 'ru') {
  console.log(`Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье`);
}
if (lang === 'en') {
  console.log(`Monday TuesdayWednesday Thursday Friday Saturday Sunday`);
}

console.log('Решение b:');
lang = 'en';
switch (lang) {
  case 'ru':  
    console.log(`Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье`);
    break;
  case 'en':
    console.log(`Monday TuesdayWednesday Thursday Friday Saturday Sunday`);
}

console.log('Решение c:');
lang = 'ru';
console.log(...daysOfWeek[lang]);

console.log(`${namePerson === 'Артем' ? namePerson + ' - директор' :
  namePerson === 'Максим' ? namePerson + ' - преподаватель' :
  namePerson + ' - студент'}`);
namePerson = 'Максим';
console.log(`${namePerson === 'Артем' ? namePerson + ' - директор' :
  namePerson === 'Максим' ? namePerson + ' - преподаватель' :
  namePerson + ' - студент'}`);
namePerson = 'Кирилл';
console.log(`${namePerson === 'Артем' ? namePerson + ' - директор' :
  namePerson === 'Максим' ? namePerson + ' - преподаватель' :
  namePerson + ' - студент'}`);