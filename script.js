'use strict';

const
  fullRecord = document.body.appendChild(document.createElement('p')),
  minRecord = document.body.appendChild(document.createElement('p')),
  getDeclensionOfStringByNumber = (num, expressions) => { 
    switch (true) {
      case +((num += '').substr(-2)) > 10  &&  
        +((num += '').substr(-2)) <= 20 : 
          return num  + ' ' + expressions[2];
      case num % 10 === 0: return num  + ' ' + expressions[2];
      case num % 10 === 1: return num  + ' ' + expressions[0];
      case num % 10 < 5: return num  + ' ' + expressions[1];
      default: return num  + ' ' + expressions[2];
    }
  },
  getFormattedNumber = (num) => {
    return num > 9 ? ('' + num)  : ('0' + num);
  },
  setStyle = (elem) => {
    elem.style.fontSize = '18px';
    elem.style.fontWeight = 'bold';
    elem.style.color = 'red';
    elem.style.fontFamily = 'Roboto, sans-serif';
  },
  watchFullFormat = function(elem) {
    const 
      daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
      monthOfYear = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
      today = new Date();

    setStyle(elem);
    elem.textContent = `Сегодня ${
        daysOfWeek[today.getDay() - 1]
      }, ${
        today.getDate()
      } ${
        monthOfYear[today.getMonth()]
      } ${
        today.getFullYear()
      } года, ${
        getDeclensionOfStringByNumber(today.getHours(), ['час', 'часа', 'часов'])
      } ${
        getDeclensionOfStringByNumber(today.getMinutes(), ['минута', 'минуты', 'минут'])
      } ${
        getDeclensionOfStringByNumber(today.getSeconds(), ['секунда', 'секунды', 'секунд'])
      }`;
  },
  watchMinFormat = (elem) => {
    const today = new Date();

    setStyle(elem);
    elem.textContent = `${
        getFormattedNumber(today.getDate())
      }.${
        getFormattedNumber(today.getMonth())
      }.${
        getFormattedNumber(today.getFullYear())
      } - ${
        getFormattedNumber(today.getHours())
      }:${
        getFormattedNumber(today.getMinutes())
      }:${
        getFormattedNumber(today.getSeconds())
      }`;
  };

setInterval(watchFullFormat, 1000, fullRecord);
setInterval(watchMinFormat, 1000, minRecord);
