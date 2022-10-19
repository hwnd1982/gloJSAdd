import DomElement from "./DomElement";

class ClassSelect extends DomElement {
  constructor(storage) {
    super("select", ["form-select", "mb-3"]);
    this._storage = storage;
    this.render();
    this.init();
  }

  get form() {
    return this._storage.form;
  }

  get table() {
    return this._storage.table;
  }

  get storage() {
    return this._storage;
  }

  render = (selected) => {
    this.elem.textContent = "";
    this.elem.innerHTML = `<option value=""
      ${!selected && 'selected'}
      disabled
      hidden value=""
    >Выберите специальность...</option>`;
    for (const key in this.storage.types)
      this.elem.innerHTML += `<option
        value="${key}"
        ${selected === key && 'selected'}
      >${this.storage.types[key].name}</option>`;
  };

  init() {
    this.storage.select = this;
    this.elem.addEventListener("change", ({target}) => this.form.render('select', target.value));
  }
}

export default ClassSelect;
