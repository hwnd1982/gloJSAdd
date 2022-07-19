import DomElement from "./DomElement";

class Form extends DomElement {
  constructor(data) {
    super('form', ['mb-3'], {children: []});
    this.init();
  }  

  render(props) {
    let container = this.row();

    this.elem.innerHTML = '';
    props.forEach((item, index) => {
      !(index % 4) && (container = this.row());

      this[item.tag] && (container.innerHTML += this[item.tag](item));
    });
    this.elem.innerHTML += this.button();
  }

  row() {
    const row = document.createElement('div');
    row.className = 'row mb-3';

    console.log(this.children);
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

  checkbox(prors) {
    return `
      <div class="col-lg-3">
        <div class="form-check">
          <input id="${prors.value}" name="${prors.name}" class="form-check-input" type="checkbox">
          <label for="${prors.value}" class="form-check-label">${prors.label}</label>
        </div>
      </div>
    `;
  }
  
  list(prors) {
    console.log(prors);
    return `
      <div class="col-lg-3">
        <div class="form-check">
          <label class="form-check-label">${prors.label}</label>
          <div class="row justify-content-start">
            ${prors.list.map(item => this.checkbox(item)).join('')}
          </div>
        </div>
      </div>
    `;
  }
  
  init() {
    this.elem.addEventListener('submit', event => {
      const formData = new FormData(event.target);
      const body = {};

      formData.forEach((value, key) => body[key] = value);
      
      event.preventDefault();
      console.log(body);
    });
  }
}

export default Form;
