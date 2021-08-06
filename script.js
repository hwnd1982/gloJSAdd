'use strict';

const arr = ['33242', '234325', '44234', '5252623', '231', '6621', '46879767'],
  checkСondition = (item, ...conditions) => {
    return conditions.reduce((check , condition) => {
      return check ? true : Number(item[0]) === condition ? true : false;
    }, false);
  },
  getNumByConditions = (arr, ...conditions) => {
    return arr.reduce((resultArr, item) => {
      if (checkСondition(item, ...conditions)) {
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
    for (let i = begin; i !== end; end - begin > 0 ? i++ : i--) {
      if (i > 1) {
        if (checkPrimeNumber(i, result)) { 
          result.push(i);
        }
      }
    }
    return result;
  };

console.log(getNumByConditions(arr, 2, 4));
getPrimeNumbers(0, 100).forEach((item) => {
  console.log(`${item}: Делители этого числа: 1 и ${item}`);
});