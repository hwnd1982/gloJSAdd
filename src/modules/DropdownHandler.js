export class DropdownHandler {
  constructor(dropdown, data, locality) {
    this.data = data;
    this.locality = locality;
    this.localityName = { RU: 'Россия', EN: 'United Kingdom', DE: 'Deutschland' }[locality];
    dropdown.innerHTML = `<div class="dropdown-lists"></div>`;
    this.defaultList = this.createList(dropdown, 'default');
    this.selectList = this.createList(dropdown, 'select');
    this.autocompleteList = this.createList(dropdown, 'autocomplete');
    this.render(this.defaultList, 3).hidden();

    this.defaultList.parentElement.addEventListener('click', ({ target }) => {
      if (target.closest('.dropdown-lists__total-line')) {
        this.hidden().clean(this.selectList).render(this.selectList, 0, [this.data[this.locality]
          .find(item =>
            item.country === target.closest('.dropdown-lists__total-line').firstElementChild.textContent)])
          .show(this.selectList);
      }
    });
    this.selectList.parentElement.addEventListener('click', ({ target }) => {
      if (target.closest('.dropdown-lists__total-line')) {
        this.clean().hidden().show(this.defaultList);
      }
    });
  }
  createList(dropdown, classNameMod) {
    const
      list = document.createElement('div'),
      inner = document.createElement('div');

    list.className = `dropdown-lists__list dropdown-lists__list--${classNameMod}`;
    inner.className = `dropdown-lists__col`;
    return dropdown.appendChild(list).appendChild(inner);
  }
  clean() {
    this.selectList.textContent = '';
    this.autocompleteList.textContent = '';
    return this;
  }
  hidden(list) {
    if (list) {
      list.parentElement.style.display = 'none';
      return this;
    }
    this.defaultList.parentElement.style.display = 'none';
    this.selectList.parentElement.style.display = 'none';
    this.autocompleteList.parentElement.style.display = 'none';
    return this;
  }
  show(list = this.defaultList) {
    list.parentElement.style.display = 'block';
    return this;
  }
  render(list, countCities, data = this.data[this.locality]) {
    data
      .sort((a, b) => (a.country === b.country ? 0 : a.country > b.country || b.country === this.localityName ? 1 : -1))
      .forEach(item => {
        const
          cities = item.cities.sort((a, b) => (+a.count === +b.count ? 0 : +a.count < +b.count ? 1 : -1))
            .reduce((citiesList, city, index) => (citiesList += countCities && index >= countCities ? '' :
              ` <div class="dropdown-lists__line">
                  <div class="dropdown-lists__city">${city.name}</div>
                  <div class="dropdown-lists__count">${city.count}</div>
                </div>`), ''),
          country = item.country ?
            ` <div class="dropdown-lists__total-line">
                <div class="dropdown-lists__country">${item.country}</div>
                <div class="dropdown-lists__count">${item.count}</div>
              </div>` : '',
          block =
            ` <div class="dropdown-lists__countryBlock">
                ${country}
                ${cities ? cities : '<div class="dropdown-lists__line">Ничего не найдено...</div>'}
              </div>`;
        list.innerHTML += block;
      });
    return this;
  }
}
