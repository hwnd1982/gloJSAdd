'use strict';

// 1) Создаем переменную num со значением 266219 (тип данных число);
let num = 266219;

// 2) Выводим в консоль произведение (умножение) цифр этого числа num;
num += '';
let multArrayItems = 1;
num.split('').forEach((item) => {
  multArrayItems *= item;
});
console.log('Произведение цифр числа', num, '=', multArrayItems);

// 3) Полученный результат multArrayItems возводим в степень 3;
let expNum = multArrayItems ** 3;

// 4) Выводим в консоль первые 2 цифры полученного числа
console.log('Результата возведения в степень 3 произведения цифр числа', 
num,'=', expNum, 'Первые 2 цифры полученного результата =', Number(String(expNum).substr(0, 2)));


