import DomElement from "./DomElement";

class Table extends DomElement {
    constructor(data) {
        super('div', ['accordion']);
        this.elem.innerHTML = `
                  <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="false" aria-controls="collapseOne">
            Работник
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div class="accordion-body" id="workerData">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">ФИО</th>
                  <th scope="col">Возраст</th>
                  <th scope="col">Доп. информация</th>
                  <th scope="col">Действие</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
        `;
    }
};

export default Table;
