'use strict';

const arr = ['123456', '234561', '345612', '456123', '561234', '612343', '432165'],
  getNumsStartingWithTwoOrFour = (arr) => {
    let i = 0;
    return arr.reduce((resultArr, item) => {
      if (item[0] === '2' || item[0] === '4') {
        resultArr.push(item);
      } 
      return resultArr;
    }, []);
  },
  getPrimeNumbers = (begin, end) => {
    let result = [],
    checkPrimeNumber = (num, prevPrimeNumbers) => {
      return prevPrimeNumbers.reduce((check, item) => {
        return !check ? false : num % item !== 0 ? true : false;
      }, true);
    };
    for (let i = begin; i !== end; i++) {
      if (i > 1) {
        if (checkPrimeNumber(i, result)) { 
          result.push(i);
        }
      }
    }
    return result;
  };

console.log('Числа начинающиеся с 2 или 4:', ...getNumsStartingWithTwoOrFour(arr));  
getPrimeNumbers(0, 100).forEach((item) => {
  console.log(`${item}: Делители этого числа: 1 и ${item}`);
});