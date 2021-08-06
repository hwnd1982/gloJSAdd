'use strict';

const arr = [],
  isNumber = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  checksConditionsForNumber = (item, ...conditions) => {
    return conditions.reduce((check , condition) => {
      return check ? true : Number(item[0]) === condition ? true : false;
    }, false);
  },
  checksConditionsForArray = (arr, ...conditions) => {
    return arr.reduce((check, item) => {
      return check ? true : checksConditionsForNumber(item, ...conditions);
    }, false);
  },
  getEnteredMultipleDigitNumber = (addCondition) => {
    let num;

    do {
      num = prompt(`Ведите многозначное число${addCondition ? ` (${addCondition}):` : ''}:`);
    } while (!isNumber(num) || num.length < 2);
    return num;
  },
  getEnteredArray = (amountOfElements) => {
    let arr = [], num;

    for (let i = 0; i < amountOfElements; i++) {
      num = getEnteredMultipleDigitNumber();
      switch (i) {
        case amountOfElements - 2:
          if (!checksConditionsForArray(arr, 2, 4)) {
            while (!checksConditionsForNumber(num, 2, 4)) {
              num = getEnteredMultipleDigitNumber(
                'обязательне условие: массив должен содержать числа начинающиеся с цифр 2 и 4'
                );
            } 
          } break;
        case amountOfElements -1:
          if (!checksConditionsForArray(arr, 2)) {
            while (!checksConditionsForNumber(num, 2)) {
              num = getEnteredMultipleDigitNumber(
                'обязательне условие: массив должен содержать числа начинающиеся с цифры 2'
                );
            }
          }
          if (!checksConditionsForArray(arr, 4)) {
            while (!checksConditionsForNumber(num, 4)) {
              num = getEnteredMultipleDigitNumber(
                'обязательне условие: массив должен содержать числа начинающиеся с цифры 4'
                );
            }
          }
      }
      arr.push(num);
    }
    return arr;
  },
  getNumByConditions = (arr, ...conditions) => {
    return arr.reduce((resultArr, item) => {
      if (checksConditionsForNumber(item, ...conditions)) {
        resultArr.push(item);
      }
      return resultArr;
    }, []);
  },
  checkPrimeNumber = (num, prevPrimeNumbers) => {
    return prevPrimeNumbers.reduce((check, item) => {
      return !check ? false : num % item !== 0 ? true : false;
    }, true);
  },
  getPrimeNumbers = (begin, end) => {
    let result = [];
    for (let i = begin; i !== end; i++) {
      if (i > 1) {
        if (checkPrimeNumber(i, result)) { 
          result.push(i);
        }
      }
    }
    return result;
  };

console.log(...getNumByConditions(getEnteredArray(7), 2, 4));
getPrimeNumbers(0, 100).forEach((item) => {
  console.log(`${item}: Делители этого числа: 1 и ${item}`);
});