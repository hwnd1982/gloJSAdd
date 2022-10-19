import DomElement from "./DomElement";

class Table extends DomElement {
  constructor(storage) {
    super("div", ["accordion"], { attributes: { id: "accordionExample" } });
    this._tables = {};
    this._storage = storage;
    this._del = true;
    this._edit = true;

    for (const key in storage.types) {
      this.table = storage.types[key];
    }

    this._controls = new DomElement("tr").elem;
    this.render();
    this.init();
  }

  get form() {
    return this._storage.form;
  }

  get controls() {
    this._controls.innerHTML = `
      <td colspan="1000">
        ${this._del ? `<button id="del" class="btn btn-danger">Удалить</button>` : ''}
        ${this._edit ? `<button id="edit" class="btn btn-primary">Изменить</button>` : ''}
      </td>`;
    return this._controls;
  }

  set controls({del = true, edit = true}) {
    this._del = del;
    this._edit = edit;
  }

  get storage() {
    return this._storage;
  }

  get table() {
    return this._tables;
  }

  set table(data) {
    const table = new DomElement("div", ["accordion-item"]);
    table.elem.innerHTML = `
        <h2 class="accordion-header" id="heading${data.type}">
            <button
                class="accordion-button collapsed" type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapse${data.type}"
                    aria-expanded="false"
                    aria-controls="collapse${data.type}"
                >
                ${data.table}
            </button>
            </h2>
        <div 
            id="collapse${data.type}"
            class="accordion-collapse collapse"
            aria-labelledby="heading${data.type}"
            data-bs-parent="#accordionExample"
        >
          <div class="accordion-body overflow-auto" id="data${data.type}">
            <table class="table">
              <thead>
                <tr>
                  ${data.fields
                    .map((th) => `<th scope="col">${th}</th>`)
                    .join("")}
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>`;
    this.children = [...this.children, table.elem];
    this._tables[data.type] = table.elem.querySelector("tbody");
  }

  init() {
    this.storage.table = this;
    this.elem.addEventListener("click", this.open.bind(this));
  }

  open = ({ target }) => {
    const button = target.closest(".accordion-button");
    const item = target.closest('.table-item');
    const del = target.closest('#del');
    const edit = target.closest('#edit');
    
    switch (true) {
      case !!item: 
        item.after(this.controls);
        return;
      case !!del:
        this.storage.remove(this.controls.previousElementSibling.id);
        this.render();
        return;
      case !!edit:
        const data = this.storage.getItem(this.controls.previousElementSibling.id).data;

        this.storage.form.data = data;
        this.storage.select?.render(data.type)
        this.storage.form?.render('edit', data.type);
        this.render();
        return;
      case !!button:
        button.classList.toggle("collapsed");
        document
          .getElementById(button.dataset.bsTarget.slice(1))
          .classList.toggle(button.dataset.bsToggle);
        return;
    }
  };

  clean() {
    for (const key in this.table) this.table[key].textContent = "";
  }

  render = () => {
    this.clean();
    this.storage.data.forEach((item) => {
      const row = new DomElement("tr", ['table-item'], {attributes: {id: item.table[0]}});

      row.elem.innerHTML = `${item.table
        .map((td) => `<td>${td}</td>`)
        .join(" ")}`;

      this.table[item.type].append(row.elem);
    });
  };
}

export default Table;
