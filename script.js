'use strict';

const DomElement = function(selector, height, width, bg, fontSize) {
  this.selector = selector; 
  this.height = height; 
  this.width = width; 
  this.bg = bg;
  this.fontSize = fontSize;
},
blockGeen = new DomElement('.block', '150px', '600px', '#3eba98', '16px'),
blockRed = new DomElement('.block', '', '300px', '#d12763', '20px'),
best = new DomElement('#best', '100px', '100%', '#f2be1a');

DomElement.prototype.addToPage = function () {
  let newElem, text;
  
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
    text = `${this.height ? `height: ${this.height};`: ''}
      ${this.width ? `width: ${this.width};` : ''}
      ${this.bg ? `background-color: ${this.bg};` : ''}
      ${this.fontSize ? `font-size: ${this.fontSize};` : ''}`;
    newElem.style.cssText = text;
    document.body.append(newElem);
    newElem.innerText = `${newElem.tagName === 'P' ? 
      `Параграф: id = "${newElem.id}"` : 
      `Блок : class = "${newElem.className}"`}\n\n${text}`;
  }
};

blockGeen.addToPage();
best.addToPage();
blockRed.addToPage();