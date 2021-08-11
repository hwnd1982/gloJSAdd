'use strict';

const
today = new Date(),
daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < daysOfWeek.length; i++) {
  let day = i + 1 > 5 ? daysOfWeek[i].italics() : daysOfWeek[i];
  
  document.body.appendChild(document.createElement('span')).innerHTML =
    `<br>${i + 1 !== today.getDay() ? day : day.bold()}`;
}