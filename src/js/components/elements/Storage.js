class Storage {
  constructor(key, classes = []) {
    this._key = key;
    this._types = classes.reduce((obj, item) => {
      obj[item.type] = item;
      
      return obj;
    }, {});
    this._data = this.data;
  }

  get key() {
    return this._key;
  }

  get types() {
    return this._types;
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
    this.data = [...this.data.filter(item => item.data.id !== data.id), new this.types[data.type](data)];
  }

  remove(id) {
    this.data = this.data.filter(item => item.id !== id);
  }

  getItem(id) {
    const [item] = this.data.filter(item => item.id === id);

    return item ? item : null;
  }
}

export default Storage;
