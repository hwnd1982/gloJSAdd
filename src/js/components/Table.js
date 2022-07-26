import DomElement from "./DomElement";

class Table extends DomElement {
  constructor(storage) {
    super("div", ["accordion"], { attributes: { id: "accordionExample" } });
    this._tables = {};
    this._storage = storage;

    for (const key in storage.types) {
      this.table = storage.types[key];
    }

    this._controls = new DomElement("tr");
    this._controls.innerHTML = `<button class="btn btn-danger" id="delBtn0">Удалить</button>`;

    this.render();
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
          <div class="accordion-body" id="data${data.type}">
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
    this.elem.addEventListener("click", this.open.bind(this));
  }

  open({ target }) {
    const button = target.closest(".accordion-button");

    if (!button) return;

    button.classList.toggle("collapsed");
    document
      .getElementById(button.dataset.bsTarget.slice(1))
      .classList.toggle(button.dataset.bsToggle);
  }

  clean() {
    for (const key in this.table) this.table[key].textContent = "";
  }

  render = () => {
    this.clean();
    this.storage.data.forEach((item) => {
      const row = new DomElement("tr");

      row.elem.innerHTML = `${item.table
        .map((td) => `<td>${td}</td>`)
        .join(" ")}`;

      this.table[item.type].append(row.elem);
    });
  };
}

export default Table;
