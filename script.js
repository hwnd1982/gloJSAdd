

const
  newYearTimerElem = document.body.appendChild(document.createElement('p')),
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
  setStyle = elem => {
    elem.style.fontSize = '18px';
    elem.style.fontStyle = 'italic';
    elem.style.fontFamily = 'Roboto, sans-serif';
  },
  newYearTimer = elem => {
    const
      today = new Date(), timeOfDay = today.getHours(),
      newYear = new Date(today.getFullYear(), 11, 31),
      daysLeft = Math.ceil((newYear - today) / (1000 * 3600 * 24)),
      date = today.toLocaleDateString("ru", { weekday: "long" });
    let greeting = '';

    switch (true) {
    case timeOfDay >= 4 && timeOfDay <= 11: greeting = 'Доброе утро!'; break;
    case timeOfDay >= 12 && timeOfDay <= 16: greeting = 'Добрый день!'; break;
    case timeOfDay >= 17 && timeOfDay <= 22: greeting = 'Добрый вечер!'; break;
    default: greeting = 'Доброй ночи!';
    }

    setStyle(elem);
    elem.innerHTML = `${greeting}<br>
    Сегодня: ${date[0].toUpperCase() + date.slice(1)}<br>
    Текущее время: ${today.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", second: "numeric" })}
    <br>До нового года осталось ${getDeclensionOfStringByNumber(daysLeft, ['день', 'дня', 'дней'])}`;
  };

setInterval(newYearTimer, 1000, newYearTimerElem);
