import uid from "../utils/uid.js";

class Worker {
  static name =  'Работник';
  static type = 'Worker';
  constructor({ firstName, lastName, age, gender, isChildren, profession }) {
    this._id = uid();
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._gender = gender;
    this._isChildren = isChildren;
    this._profession = profession;
  }

  static get props() {
    return [
      { label: 'Имя', tag: 'input', type: 'text', name: 'firstName'},
      { label: 'Фамилия', tag: 'input', type: 'text', name: 'lastName'},
      { label: 'Возраст', tag: 'input', type: 'number', name: 'age'},
      { label: 'Пол', tag: 'select', name: 'gender', options: [
        {text: 'Мужской', tag: 'option', value: 'male'}, 
        {text: 'Женский', tag: 'option', value: 'female'}
      ]},
      { label: 'Дети', tag: 'input', type: 'checkbox', value: 'ischildren', name: 'ischildren', mode: 'switch'},
    ];
  }

  get id() {
    return this._id;
  }

  set id(agr) {
    return agr;
  }

  get type() {
    return this._type;
  }

  set type(agr) {
    return agr;
  }

  get name() {
    return this._name;
  }

  set name(agr) {
    return agr;
  }

  set data({ firstName, lastName, age, gender, isChildren, profession }) {
    firstName && (this._firstName = firstName);
    lastName && (this._lastName = lastName);
    age && (this._age = age);
    gender && (this._gender = gender);
    isChildren && (this._isChildren = isChildren);
    profession && (this._profession = profession);
  }

  get data() {
    return {
      type: this.type,
      firstName: this._firstName,
      lastName: this._lastName,
      age: this._age,
      gender: this._gender,
      isChildren: this._isChildren,
      profession: this._profession
    };
  }
}

export default Worker;
