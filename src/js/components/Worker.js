import uid from "../utils/uid";

class Worker {
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
    return {
      firstName: { label: 'Имя', type: 'input' },
      lastName: { label: 'Фамилия', type: 'input' },
      age: { label: 'Возраст', type: 'input' },
      gender: { label: 'Пол', type: 'radio' },
      isChildren: { label: 'Дети', type: 'checkbox' },
      profession: { label: 'Должность', type: 'select' }
    };
  }

  static set props(arg) {
    return;
  }

  get id() {
    return this._id;
  }

  set id(agr) {
    return;
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
      id: this._id,
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
