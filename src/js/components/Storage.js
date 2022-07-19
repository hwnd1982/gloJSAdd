class Storage {
  constructor(keyValue, classes = []) {
    this._key = keyValue;
    this._types = classes.reduce((obj, item) => {
      obj[item.name] = item;
      
      return obj;
    }, {});
  }

  isExist() {
    return !!localStorage.getItem(this._key);
  }

  get key() {
    return this._key;
  }

  set key(value) {
    return this._key;
  }

  get types() {
    return this._types;
  }

  set types(value) {
    return;
  }

  get data() {
    const data = JSON.parse(localStorage.getItem(this._key)) || [];

    return data.map(item => new this.types[item.name](item));
  }

  set data(data) {
    localStorage.setItem(this._key, JSON.stringify(data));
  }

  add(data) {
    this.data = [data, ...this.data];
  }

  remove(id) {
    this.data = this.data.filter(item => item.id !== id);
  }
}

export default Storage;
