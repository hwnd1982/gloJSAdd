import DomElement from "./DomElement";

class Form extends DomElement {
  constructor(table) {
    super("form", ["mb-3"]);
    this._table = table;
    this._table.form = this;
    this._handler = null;
    this._data = {};
    this.init();
  }

  set handler(handler) {
    this._handler = handler;
  }

  get select() {
    return this._select;
  }

  set data(data) {
    this._data = data;
  }

  get data() {
    return this._data;
  }

  clean() {
    this.data = {};
  }

  save(strict = false) {
    const formData = new FormData(this._elem);
    const body = {};

    this.data.id && (body['id'] = this.data.id);
    this.data.type && (body['type'] = this.data.type);
    
    for (const key of formData.keys()) {
      const values = formData.getAll(key);

      body[key] =
        values.length - 1 ? values : values[0] === "true" ? true : values[0];
    }

    this.data.isChildren = !!body.isChildren;

    strict ?
      this.data = body :
      this.data = {...this.data, ...body};
  }

  get table() {
    return this._table;
  }

  get storage() {
    return this._table.storage;
  }

  set handler(handler) {
    this._handler = handler;
  }

  get handler() {
    return this._handler;
  }

  render = (event, type) => {
    const props = this.storage.types[type].props;
    let container = this.row();

    this.data.type = type;
    event === 'select' && this.save();

    this.elem.innerHTML = "";
    props.forEach((item, index) => {
      if (!index) {
        this.type = item;
        return;
      }

      !((index - 1) % 4) && (container = this.row());

      this[item.tag] && (container.innerHTML += this[item.tag](item));
    });
    this.elem.innerHTML += this.button();
  };

  row() {
    const row = document.createElement("div");
    row.className = "row";

    this.children = [...(this.children ? this.children : []), row];

    return row;
  }

  button() {
    return `
      <div class="row row-cols-3 gap-2 mx-auto">
        <button id="add" class="btn btn-primary mt-2">Сохранить</button>
        <button id="cancel" type="button" class="btn btn-outline-primary mt-2">Отмена</button>
      </div>
    `;
  }

  input(props) {
    return this[props.type] ? this[props.type](props) : "";
  }

  text(props) {
    return `
      <div class="col-lg-3 mb-3">
        <input
          type="text"
          name="${props.name}"
          class="form-control"
          placeholder="${props.label}"
          value="${this.data[props.name] ? this.data[props.name] : ''}"
        >
      </div>
    `;
  }

  number(props) {
    return `
      <div class="col-lg-3 mb-3">
        <input
          type="number"
          name="${props.name}"
          class="form-control"
          placeholder="${props.label}"
          value="${this.data[props.name] ? this.data[props.name] : ''}"
        >
      </div>
    `;
  }

  select(props) {
    return `
      <div class="col-lg-3 mb-3">
        <select
          name="${props.name}"
          class="form-select" 
        >
          <option value="" disabled hidden selected>${props.label}</option>
          ${props.options
            .map(
              (option) =>
                `<option
                  value="${option.value}"
                  ${this.data[props.name] === option.value ? 'selected' : ''}
                >${option.text}</option>`
            )
            .join()}
        </select>
      </div>
    `;
  }

  checkbox(props) {
    const checked =
      typeof this.data[props.name] === 'object' ? this.data[props.name].includes(props.value) :
      this.data[props.name] === props.value;

    return `
      <div class="col-lg-3">
        <div class="form-check">
          <input
            id="${props.for}"
            name="${props.name}"
            value="${props.value}"
            class="form-check-input"
            type="checkbox"
            ${checked ? 'checked' : ''}
          >
          <label for="${props.for}" class="form-check-label">${props.label}</label>
        </div>
      </div>
    `;
  }

  list(props) {
    return `
      <div class="col-lg-4 mb-3">
        <div class="form-check">
          <label class="form-check-label">${props.label}</label>
          <fieldset class="row justify-content-start">
            ${props.list.map((item) => this.checkbox(item)).join("")}
          </fieldset>
        </div>
      </div>
    `;
  }

  init() {
    this.elem.addEventListener("submit", event => {
      event.preventDefault();
      this.save(true);
      this.elem.innerHTML = "";
      this.storage.add(this.data);
      this.handler.render();
      this.table.render();
      this.clean();
    });
    this.elem.addEventListener("click", event => {
      if (event.target.id !== 'cancel') return;

      this.elem.innerHTML = "";
      this.handler.render();
      this.clean();
    });
  }
}

export default Form;
