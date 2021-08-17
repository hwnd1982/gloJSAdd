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
      today = new Date();
    let date = today.toLocaleDateString("ru", {weekday: "long", year: "numeric", month: "long",day: "numeric"});
    
    setStyle(elem);
    date = `${date[0].toUpperCase() + date.slice(1, -1)}ода`;
    elem.textContent = `Сегодня ${date}, ${
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
      today.toLocaleDateString("ru", {year: "numeric", month: "numeric", day: "numeric"})
    } - ${
      today.toLocaleTimeString("ru", {hour: "numeric", minute: "numeric", second: "numeric"})
    }`;
  };

setInterval(watchFullFormat, 1000, fullRecord);
setInterval(watchMinFormat, 1000, minRecord);