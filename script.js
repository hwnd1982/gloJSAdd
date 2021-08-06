'use strict';

const arr = ['33242', '234325', '44234', '5252623', '231', '6621', '46879767'],
  checkСondition = (item, ...conditions) => {
    return conditions.reduce((verified, condition) => {
      return verified ? true : Number(item[0]) === condition ? true : false;
    }, false);
  },
  getNumByConditions = (arr, ...conditions) => {
    return arr.reduce((resultArr, item) => {
      if (checkСondition(item, ...conditions)) {
        resultArr.push(item);
      }
      return resultArr;
    }, []);
  };

console.log(getNumByConditions(arr, 2, 4));