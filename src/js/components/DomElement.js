class DomElement {
  constructor(elem = "div", classes, options) {
    this._elem = document.createElement(elem);
    classes && (this.classes = classes);
    if (options) {
      this.children = options.children ? options.children : [];
      options.parent && (this.parent = options.parent);
      if (options.attributes)
        for (const key in options.attributes)
          this._elem.setAttribute(key, options.attributes[key]);
    }
  }

  get elem() {
    return this._elem;
  }

  set elem(value) {
    return value;
  }

  get parent() {
    return this.elem.parentElement;
  }

  set parent(parent) {
    parent.append(this.elem);
  }

  get children() {
    return [...this.elem.children];
  }

  set children(children) {
    this.elem.textContent = "";
    this.elem.append(...children);
  }

  get classes() {
    return this.elem.className.split(" ");
  }

  set classes(classes) {
    this.elem.className = "";
    this.elem.classList.add(...classes);
  }
}

export default DomElement;
