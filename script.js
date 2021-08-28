'use strict';

const DomElement = function(selector, height, width, bg, fontSize) {
  this.selector = selector; 
  this.height = height; 
  this.width = width; 
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.addToPage = function () {
  let newElem;
  
  switch (this.selector[0]) {
    case '.' : 
      newElem = document.createElement('div');
      newElem.className = this.selector.slice(1);
      break;
    case '#' : 
      newElem = document.createElement('p');
      newElem.id = this.selector.slice(1);
      break;
  }
  if (newElem) {
    newElem.style.cssText = `position: absolute;
      border-radius: 10px;
      top: calc(50% + -50px);
      right: calc(50% + -50px);
      ${this.height ? `height: ${this.height};`: ''}
      ${this.width ? `width: ${this.width};` : ''}
      ${this.bg ? `background-color: ${this.bg};` : ''}
      ${this.fontSize ? `font-size: ${this.fontSize};` : ''}`;
    this.elem = document.body.appendChild(newElem);
    document.addEventListener('keydown', this.moveElem.bind(this));
  }
};
DomElement.prototype.moveElem = function (event) {
  let position = this.elem.getBoundingClientRect();
  
  switch (event.key) {
    case 'ArrowUp':
      if (position.y - 10 > 0) {
        this.elem.style.top = 
          `calc(50% + ${+(this.elem.style.top.match(/-?\d+px/)+ '').slice(0,-2) - 10}px)`;
      }
      break;
    case 'ArrowDown':
      if (window.innerHeight - position.y - position.height - 10 > 0) {
        this.elem.style.top = 
          `calc(50% + ${+(this.elem.style.top.match(/-?\d+px/)+ '').slice(0,-2) + 10}px)`;
      }      
      break;
    case 'ArrowLeft':
      if (position.x - 10 > 0) {
        this.elem.style.right = 
          `calc(50% + ${+(this.elem.style.right.match(/-?\d+px/)+ '').slice(0,-2) + 10}px)`;
      }
      break;
    case 'ArrowRight': 
      if (window.innerWidth - position.x - position.width - 10 > 0) {
        this.elem.style.right = 
          `calc(50% + ${+(this.elem.style.right.match(/-?\d+px/)+ '').slice(0,-2) - 10}px)`;
      } 
      break;
  }
};

const block = new DomElement('.block', '100px', '100px', '#9664da');

block.addToPage();