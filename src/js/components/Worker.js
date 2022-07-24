import uid from "../utils/uid.js";

class Worker {
  static name = "Работник";
  static table = "Работники";
  static type = "Worker";
  constructor({ firstName, lastName, age, gender, isChildren, profession }) {
    this._id = uid();
    this._type = "Worker";
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._gender = gender;
    this._isChildren = isChildren;
  }

  static get props() {
    return [
      this.type,
      { label: "Имя", tag: "input", type: "text", name: "firstName" },
      { label: "Фамилия", tag: "input", type: "text", name: "lastName" },
      { label: "Возраст", tag: "input", type: "number", name: "age" },
      {
        label: "Пол",
        tag: "select",
        name: "gender",
        options: [
          { text: "Мужской", tag: "option", value: "male" },
          { text: "Женский", tag: "option", value: "female" },
        ],
      },
      {
        label: "Дети",
        tag: "input",
        type: "checkbox",
        value: true,
        name: "isChildren",
      },
    ];
  }

  static get fields() {
    return ["id", "ФИО", "Возраст", "Пол", "Дети"];
  }

  get id() {
    return this._id;
  }

  get type() {
    return this._type;
  }

  set data({ firstName, lastName, age, gender, isChildren }) {
    firstName && (this._firstName = firstName);
    lastName && (this._lastName = lastName);
    age && (this._age = age);
    gender && (this._gender = gender);
    isChildren && (this._isChildren = isChildren);
  }

  get data() {
    return {
      id: this.id,
      type: this.type,
      firstName: this._firstName,
      lastName: this._lastName,
      name: `${this._firstName} ${this._lastName}`,
      age: this._age,
      gender: this._gender,
      isChildren: this._isChildren,
    };
  }
}

export default Worker;
