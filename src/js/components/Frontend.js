import Worker from "./Worker";

class Frontend extends Worker {
  constructor({ stack, experience, ...rest }) {
    super(rest);
    this._stack = stack;
    this._experience = experience;
  }

  static get props() {
    const worker = super.props;

    return {
      ...worker,
      stack: { label: 'Технологический стек', type: 'checkbox' },
      experience: { label: 'Уровень', type: 'select' }
    };
  }

  get data() {
    const worker = super.data;

    return {
      ...worker,
      stack: this._stack,
      experience: this._experience
    };
  }

  set data({ stack, experience, ...rest }) {
    super.data = rest;
    stack && (this._stack = stack);
    experience && (this._experience = experience);
  }
}

export default Frontend;
