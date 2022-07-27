import Worker from "./Worker";

class Runner extends Worker {
  static name = "Курьер";
  static table = "Курьеры";
  static type = "Runner";

  constructor({ bicycle, ...rest }) {
    super(rest);
    this._type = "Runner";
    this._bicycle = bicycle;
  }

  static get props() {
    return [
      ...super.props,
    {
      label: "Велосипед",
      for: "bicycle",
      tag: "input",
      type: "checkbox",
      value: true,
      name: "bicycle",
    }]
  }

  static get fields() {
    return [...super.fields, "Велосипед"];
  }

  get data() {
    return {
      ...super.data,
      bicycle: this._bicycle,
    };
  }

  set data({ bicycle, ...rest }) {
    super.data = rest;
    bicycle && (this._bicycle = bicycle);
  }

  get table() {
    return [
      ...super.table,
      this._bicycle ? 'Есть' : 'Нет'
    ];
  }
}

export default Runner;
