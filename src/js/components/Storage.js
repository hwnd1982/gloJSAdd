class Storage {
  constructor(keyValue, classes = []) {
    this._key = keyValue;
    this._types = classes.reduce((obj, item) => {
      obj[item.type] = item;
      
      return obj;
    }, {});
    this._data = this.data;
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

    return data.map(item => new this.types[item.type](item));
  }
  
  set data(data) {
    this._data = data;

    localStorage.setItem(this._key, JSON.stringify(data.map(item => item.data)));
  }

  add(data) {
    this.data = [...this.data, new this.types[data.type](data)];
  }

  remove(id) {
    this.data = this.data.filter(item => item.id !== id);
  }
}

export default Storage;
