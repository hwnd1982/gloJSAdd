import DomElement from "./DomElement";

class Form extends DomElement {
  constructor(storage) {
    super('form', ['mb-3']);
    this.storage = storage;
    this.init();
  }  

  render(props) {
    let container = this.row();

    this.elem.innerHTML = '';
    props.forEach((item, index) => {
      if(!index) {
        this.type = item;
        return;
      }

      !((index - 1) % 4) && (container = this.row());

      this[item.tag] && (container.innerHTML += this[item.tag](item));
    });
    this.elem.innerHTML += this.button();
  }

  row() {
    const row = document.createElement('div');
    row.className = 'row mb-3';

    this.children = [...(this.children ? this.children : []), row];
    
    return row;
  }

  button() {
    return `<button id="add" class="btn btn-primary">Сохранить</button>`;
  }

  input(prors) {
    return this[prors.type] ? this[prors.type](prors) : '';
  }

  text(prors) {
    return `
      <div class="col-lg-3">
        <input type="text" name="${prors.name}" class="form-control" placeholder="${prors.label}">
      </div>
    `;
  }

  number(prors) {
    return `
      <div class="col-lg-3">
        <input type="number" name="${prors.name}" class="form-control" placeholder="${prors.label}">
      </div>
    `;
  }

  select(prors) {
    return `
      <div class="col-lg-3">
        <select name="${prors.name}" class="form-select">
          <option value="" disabled hidden selected>${prors.label}</option>
          ${prors.options.map(option => `<option value="${option.value}">${option.text}</option>`).join()}
        </select>
      </div>
    `;
  }

  checkbox(props) {
    return `
      <div class="col-lg-3">
        <div class="form-check">
          <input id="${props.name}" name="${props.name}" value="${props.value}" class="form-check-input" type="checkbox">
          <label for="${props.name}" class="form-check-label">${props.label}</label>
        </div>
      </div>
    `;
  }
  
  list(prors) {
    return `
      <div class="col-lg-3">
        <div class="form-check">
          <label class="form-check-label">${prors.label}</label>
          <fieldset class="row justify-content-start">
            ${prors.list.map(item => this.checkbox(item)).join('')}
          </fieldset>
        </div>
      </div>
    `;
  }
  
  init() {
    this.elem.addEventListener('submit', event => {
      const formData = new FormData(event.target);
      const body = {type: this.type};

      event.preventDefault();

      for (const key of formData.keys()) {
        const values = formData.getAll(key);

        body[key] = values.length - 1 ? values : values[0] === 'true' ? true : values[0];
      }
      
      this.storage.add(body);
      console.log(this.storage)
    });
  }
}

export default Form;
