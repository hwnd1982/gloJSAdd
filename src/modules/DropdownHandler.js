export class DropdownHandler {
  constructor(localData, localCountryName) {
    const dropdown = document.querySelector('.dropdown');

    dropdown.innerHTML = `<div class="dropdown-lists"></div>`;
    this.data = localData;
    this.localCountryName = localCountryName;
    this.selectCities = document.getElementById('select-cities'),
    this.button = document.querySelector('.button'),
    this.closeButton = document.querySelector('.close-button'),
    this.defaultList = this.createList(dropdown.firstElementChild, 'default');
    this.selectList = this.createList(dropdown.firstElementChild, 'select');
    this.autocompleteList = this.createList(dropdown.firstElementChild, 'autocomplete');
    this.render(this.defaultList, 3).hidden();

    dropdown.parentElement.addEventListener('click', ({ target }) => {
      if (!target.closest('.dropdown') && target !== this.selectCities && target !== this.button && this.closeButton) {
        return;
      }
      if (target.closest('.dropdown')) {
        if (target.closest('.dropdown-lists__total-line')) {
          if (target.closest('.dropdown-lists__list--default')) {
            this.hidden().clean(this.selectList).render(this.selectList, 0, [this.data.find(item =>
              item.country === target.closest('.dropdown-lists__total-line').firstElementChild.textContent)])
              .show(this.selectList);
          }
          if (target.closest('.dropdown-lists__list--select')) {
            this.clean().hidden().show(this.defaultList);
          }
          this.selectCities.value = target.closest('.dropdown-lists__total-line').firstElementChild.textContent;
          this.button.href = '#';
        }
        if (target.closest('.dropdown-lists__line')) {
          const city = this.data.map(item => item.cities.find(item =>
            item.name === target.closest('.dropdown-lists__line').firstElementChild.textContent)
          ).filter(item => item)[0];
          this.button.href = city.link;
          this.selectCities.value = city.name;
        }
        this.selectCities.classList.add('no-empty');
        this.closeButton.style.display = 'block';
      }
      if (target === this.selectCities) {
        this.selectCities.classList.add('no-empty');
        this.show();
      }
      if (target === this.button && this.button.getAttribute('href') !== '#') {
        this.selectCities.value = '';
        this.hidden();
      }
      if (target === this.closeButton) {
        this.selectCities.classList.remove('no-empty');
        this.selectCities.value = '';
        this.closeButton.style.display = '';
        this.button.href = '#';
        this.hidden();
      }
    });
    this.selectCities.addEventListener('input', () => {
      if (this.selectCities.value) {
        const list = this.data.reduce((list, country) => {
          const cities = country.cities.reduce((list, city) => {
            const reg = new RegExp(`^(${this.selectCities.value.toLowerCase()})`);

            if (city.name.toLowerCase().match(reg)) {
              list.push(city);
            }
            return list;
          }, []);
          cities ? list.push(...cities) : null;
          return list;
        }, []);
        this.selectCities.classList.add('no-empty');
        this.clean().hidden()
          .render(this.autocompleteList, 0, [{ cities: list }])
          .show(this.autocompleteList);
        this.closeButton.style.display = 'block';
      } else {
        this.autocompleteList.parentElement.style.display !== 'none' ?
          this.clean().hidden().show(this.defaultList) :
          this.clean().hidden();
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
  render(list, countCities, data = this.data) {
    data
      .sort((a, b) =>
        (a.country === b.country ? 0 : a.country > b.country || b.country === this.localCountryName ? 1 : -1))
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
