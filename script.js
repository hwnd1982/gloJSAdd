'use strict';

const getRendomColor = () => {
  return '#'+ ('000000' + (Math.random()*0x1000000).toString(16)).slice(-6);
},
setBgColor = (event) => {
  let color = getRendomColor();
  document.querySelector('.color-value').textContent = color;
  document.querySelector('.chenge-color').style.color = color;
  document.body.style.backgroundColor = color;
};

setBgColor();
document.querySelector('.chenge-color').addEventListener('click', setBgColor);