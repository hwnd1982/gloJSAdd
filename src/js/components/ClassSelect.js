import DomElement from "./DomElement";

class ClassSelect extends DomElement {
  constructor(form) {
    super("select", ["form-select", "mb-3"]);
    this._form = form;
    this.render();
    this.init();
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

  render = () => {
    this.elem.textContent = "";
    this.elem.innerHTML = `<option value="" selected disabled hidden value="">Выберите специальность...</option>`;
    for (const key in this.storage.types)
      this.elem.innerHTML += `<option value="${key}">${this.storage.types[key].name}</option>`;
  };

  init() {
    this.elem.addEventListener("change", (event) => {
      this.form.handler = this;
      this.form.render(event);
    });
  }
}

export default ClassSelect;
