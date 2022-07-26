import Worker from "./Worker.js";

class Frontend extends Worker {
  static name = "Фронтенд-разработчик";
  static table = "Фронтенд-разработчики";
  static type = "Frontend";

  constructor({ stack, experience, ...rest }) {
    super(rest);
    this._type = "Frontend";
    this._stack = stack;
    this._experience = experience;
  }

  static get props() {
    return [
      ...super.props,
      {
        label: "Уровень",
        tag: "select",
        name: "experience",
        options: [
          { tag: "option", value: "junior", text: "Junior" },
          { tag: "option", value: "middle", text: "Middle" },
          { tag: "option", value: "senior", text: "Senior" },
        ],
      },
      {
        label: "Технологический стек",
        tag: "list",
        list: [
          {
            label: "HTML",
            tag: "input",
            type: "checkbox",
            value: "html",
            name: "stack",
          },
          {
            label: "CSS",
            tag: "input",
            type: "checkbox",
            value: "css",
            name: "stack",
          },
          {
            label: "SCSS",
            tag: "input",
            type: "checkbox",
            value: "scss",
            name: "stack",
          },
          {
            label: "JS",
            tag: "input",
            type: "checkbox",
            value: "js",
            name: "stack",
          },
          {
            label: "React",
            tag: "input",
            type: "checkbox",
            value: "react",
            name: "stack",
          },
          {
            label: "Redux",
            tag: "input",
            type: "checkbox",
            value: "redux",
            name: "stack",
          },
          {
            label: "Vue",
            tag: "input",
            type: "checkbox",
            value: "vue",
            name: "stack",
          },
        ],
      },
    ];
  }

  static get fields() {
    return [...super.fields, "Уровень", "Технологический стек"];
  }

  get data() {
    return {
      ...super.data,
      stack: this._stack,
      experience: this._experience,
    };
  }

  set data({ stack, experience, ...rest }) {
    super.data = rest;
    stack && (this._stack = stack);
    experience && (this._experience = experience);
  }

  get table() {
    return [...super.table, this._experience, this._stack.join(', ')];
  }
}

export default Frontend;
