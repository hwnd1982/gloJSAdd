function guessNumberGlobal(attemptsIndex) {
  let randomNum;
  const attempts = attemptsIndex;

  function newRound() {
    attemptsIndex = attempts;
    randomNum = Math.floor(Math.random() * 100) + 1;
    return guessNumber();
  }

  function guessNumber() {
    let userNum = prompt("Угадай число от 1 до 100");

    if (userNum === null) {
      alert("Игра окончена");
      return "Игра окончена";
    }

    if (+userNum === randomNum) {
      confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?") ? (userNum = newRound()) : alert("Игра окончена");

      return userNum;
    }

    if (attemptsIndex > 1) {
      switch (true) {
        case !userNum.trim() || isNaN(userNum):
          alert("Можно вводить только числа");
          break;
        case +userNum > randomNum:
          attemptsIndex--;
          alert("Загаданное число меньше. У Вас осталось " + attemptsIndex + " попыток");
          break;
        case +userNum < randomNum:
          attemptsIndex--;
          alert("Загаданное число больше. У Вас осталось " + attemptsIndex + " попыток");
          break;
      }
    } else {
      confirm("Попытки закончились, хотите сыграть еще?") ? (userNum = newRound()) : alert("Игра окончена");

      return userNum;
    }

    userNum = guessNumber();
    return userNum;
  }
  return newRound;
}

const play = guessNumberGlobal(10);

console.log(play());
