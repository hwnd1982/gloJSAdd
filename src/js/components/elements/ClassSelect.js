import DomElement from "./DomElement";

class ClassSelect extends DomElement {
  constructor(form) {
    super("select", ["form-select", "mb-3"]);
    this._form = form;
    this.render();
    this.init();
    this._form.handler = this;
  }

  get form() {
    return this._form;
  }

  get table() {
    return this._form.table;
  }

  get storage() {
    return this._form.table.storage;
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
    this.form.handler = this;
    this.elem.addEventListener("change", ({target}) => this.form.render('select', target.value));
  }
}

export default ClassSelect;
