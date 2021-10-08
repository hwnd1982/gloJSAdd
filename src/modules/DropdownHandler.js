const
  makeEaseOut = timing => timeFraction => 1 - timing(1 - timeFraction),
  square = timeFraction => Math.pow(timeFraction, 2),
  animate = ({ duration, draw, timing }) => {
    const
      start = performance.now(),
      requestID = requestAnimationFrame(function animate(time) {
        const
          timeFraction = (time - start) / duration,
          progress = timing(timeFraction > 1 ? 1 : timeFraction),
          stop = draw.call(null, progress);

        if (timeFraction < 1 && !stop) {
          return requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(requestID);
        }
      });
  };

export class DropdownHandler {
  constructor(data, local) {
    const dropdown = document.querySelector('.dropdown');

    dropdown.innerHTML = `<div class="dropdown-lists"></div>`;
    dropdown.firstElementChild.style.cssText =
      `
        overflow: hidden;
        position: relative;
      `;
    this.data = data;
    this.language = { RU: /[^а-яё-\s]/gi, EN: /[^a-z-\s]/gi, DE: /[^a-zäöüß-\s]/gi }[local];
    this.selectCities = document.getElementById('select-cities'),
    this.button = document.querySelector('.button'),
    this.closeButton = document.querySelector('.close-button'),
    this.defaultList = this.createList(dropdown.firstElementChild, 'default');
    this.selectList = this.createList(dropdown.firstElementChild, 'select');
    this.autocompleteList = this.createList(dropdown.firstElementChild, 'autocomplete');
    this.defaultList.parentElement.style.cssText =
      `
        position: relative;
        transform: translate(0, 0);
      `;
    this.selectList.parentElement.style.cssText =
      `
        position: absolute;
        transform: translate(100%, 0);
      `;
    this.render(this.defaultList, 3).hidden();

    dropdown.parentElement.addEventListener('click', ({ target }) => {
      if (!target.closest('.dropdown') &&
      target !== this.selectCities && target !== this.button && target !== this.closeButton) {
        return;
      }
      if (target.closest('.dropdown')) {
        if (target.closest('.dropdown-lists__total-line')) {
          if (target.closest('.dropdown-lists__list--default')) {
            this.clean(this.selectList).render(this.selectList, 0, [this.data.find(item =>
              item.country === target.closest('.dropdown-lists__total-line').firstElementChild.textContent)])
              .addToggleListsAnimation(this.defaultList.parentElement, this.selectList.parentElement, true, false);
          }
          if (target.closest('.dropdown-lists__list--select')) {
            this.addToggleListsAnimation(
              this.selectList.parentElement, this.defaultList.parentElement, false, true, this.clean.bind(this));
          }
          this.selectCities.value = target.closest('.dropdown-lists__total-line').firstElementChild.textContent;
          this.button.href = '#';
        }
        if (target.closest('.dropdown-lists__line') &&
          target.closest('.dropdown-lists__line').textContent !== 'Ничего не найдено...') {
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
        if (this.selectList.parentElement.style.transform === 'translate(0%, 0px)') {
          this.addToggleListsAnimation(
            this.selectList.parentElement, this.defaultList.parentElement, false, true, this.clean.bind(this));
        }
        this.closeButton.style.display = 'block';
        this.selectCities.classList.add('no-empty');
        this.hidden(this.autocompleteList).show().show(this.selectList);
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
        this.defaultList.parentElement.style.cssText =
          `
            position: relative;
            transform: translate(0, 0);
          `;
        this.selectList.parentElement.style.cssText =
          `
            position: absolute;
            transform: translate(100%, 0);
          `;
        this.clean().hidden();
      }
    });
    this.selectCities.addEventListener('input', () => {
      this.selectCities.value = this.selectCities.value
        .replace(/^[\s-]/, '').replace(this.language, '').replace(/[\s-]{2}/gi, ' ').replace(/[-]{2}/gi, '-');
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
          .render(this.autocompleteList, 0, [{ cities: list }], this.selectCities.value)
          .show(this.autocompleteList);
        this.closeButton.style.display = 'block';
      } else {
        this.autocompleteList.parentElement.style.display !== 'none' ?
          this.clean().hidden().show(this.defaultList) :
          this.clean().hidden();
      }
    });
  }
  drawToggleLists(current, next, currentWay, nextWay, action, progress) {
    current.style.transform = `translate(${currentWay ? '-' : ''}${progress * 100}%, 0)`;
    next.style.transform = `translate(${nextWay ? '-' : ''}${100 - progress * 100}%, 0)`;
    if (action && progress === 1) {
      action();
    }
  }
  addToggleListsAnimation(current, next, currentWay, nextWay, action) {
    animate({
      duration: 1000,
      timing: makeEaseOut(square),
      draw: this.drawToggleLists.bind(null, current, next, currentWay, nextWay, action)
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
  render(list, countCities, data = this.data, inputValue) {
    data.forEach(item => {
      const
        cities = item.cities.sort((a, b) => (+a.count === +b.count ? 0 : +a.count < +b.count ? 1 : -1))
          .reduce((citiesList, city, index) => (citiesList += countCities && index >= countCities ? '' :
            ` <div class="dropdown-lists__line">
                  <div class="dropdown-lists__city">${inputValue ?
              city.name.replace(new RegExp(`^(${inputValue})`, 'i'), '<b>$&</b>') : city.name}</div>
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
