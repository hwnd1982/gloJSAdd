import data from "./modules/db_cities";
import { DropdownHandler } from './modules/DropdownHandler';

const
  locality = 'RU',
  selectCities = document.getElementById('select-cities'),
  button = document.querySelector('.button'),
  closeButton = document.querySelector('.close-button'),
  dropdown = document.querySelector('.dropdown'),
  dropdownHandler = new DropdownHandler(dropdown, data, locality);

selectCities.addEventListener('click', () => {
  selectCities.classList.add('no-empty');
  dropdownHandler.show();
});
button.addEventListener('click', () => (button.getAttribute('href') !== '#' ? selectCities.value = '' : null));
selectCities.addEventListener('input', () => {
  if (selectCities.value) {
    const list = data[locality].reduce((list, country) => {
      const cities = country.cities.reduce((list, city) => {
        const reg = new RegExp(`^(${selectCities.value.toLowerCase()})`);

        if (city.name.toLowerCase().match(reg)) {
          list.push(city);
        }
        return list;
      }, []);
      cities ? list.push(...cities) : null;
      return list;
    }, []);
    selectCities.classList.add('no-empty');
    dropdownHandler.clean().hidden()
      .render(dropdownHandler.autocompleteList, 0, [{ cities: list }])
      .show(dropdownHandler.autocompleteList);

    closeButton.style.display = 'block';
  } else {
    dropdownHandler.clean().hidden().show(dropdownHandler.defaultList);
  }
});
selectCities.addEventListener('change', () =>
  (selectCities.value ? selectCities.classList.add('no-empty') : selectCities.classList.remove('no-empty')));
dropdown.addEventListener('click', ({ target }) => {
  if (!target.closest('.dropdown-lists__line') && !target.closest('.dropdown-lists__total-line')) {
    return;
  }
  if (target.closest('.dropdown-lists__line')) {
    const city = data[locality].map(item => item.cities.find(item =>
      item.name === target.closest('.dropdown-lists__line').firstElementChild.textContent)
    ).filter(item => item)[0];
    button.href = city.link;
    selectCities.value = city.name;
  }
  if (target.closest('.dropdown-lists__total-line')) {
    selectCities.value = target.closest('.dropdown-lists__total-line').firstElementChild.textContent;
    button.href = '#';
  }
  selectCities.classList.add('no-empty');
  closeButton.style.display = 'block';
});
closeButton.addEventListener('click', () => {
  selectCities.classList.remove('no-empty');
  selectCities.value = '';
  closeButton.style.display = '';
  button.href = '#';
  dropdownHandler.hidden();
});
