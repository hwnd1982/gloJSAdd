class Storage {
  constructor(key) {
    this._key = key;
  }

  isExist() {
    return !!localStorage.getItem(this._key);
  }

  get data() {
    return JSON.parse(localStorage.getItem(this._key)) || [];
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
