import DomElement from "./DomElement";

class ClassSelect extends DomElement {
  constructor(classes, options) {
    super('select', classes, options);
    options?.action && this.init(options.action);
  }

  set children(children) {
    this.elem.textContent = '';

    this.elem.innerHTML = `<option value="" selected disabled hidden value="">Выберите специальность...</option>` +
      children.map(item => `<option value="${item.type}">${item.name}</option>`).join();
  }

  init(action) {
    this.elem.addEventListener('change', action);
  }
}

export default ClassSelect;
