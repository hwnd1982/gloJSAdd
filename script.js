const
  currency = { RUR: 1 },
  singCurrency = { RUR: '₽', EUR: '€', USD: '$' },
  currencyExchange = document.querySelector('.currency-exchange__info-ex'),
  currencyValueCurrent = document.getElementById('currency-value-current'),
  currencyCurrent = document.getElementById('currency-current'),
  currencyCurrentList = document.getElementById('currency-list-current'),
  currencyValueNew = document.getElementById('currency-value-new'),
  currencyNew = document.getElementById('currency-new'),
  currencyNewList = document.getElementById('currency-list-new'),
  setCurrency = (current, result) => {
    currencyCurrent.textContent = current;
    currencyNew.textContent = result;
  },
  render = () => {
    currencyNewList.textContent = '';
    currencyCurrentList.textContent = '';
    for (const key in currency) {
      if (key !== currencyCurrent.textContent && key !== currencyNew.textContent) {
        currencyNewList.innerHTML += `<li class="dropdown__currency-item">${key}</li>`;
        currencyCurrentList.innerHTML += `<li class="dropdown__currency-item">${key}</li>`;
      }
    }
    +currency[currencyCurrent.textContent] < currency[currencyNew.textContent] ?
      currencyExchange.textContent =
        `${Math.floor(currency[currencyNew.textContent] / currency[currencyCurrent.textContent] * 100) / 100
        }${singCurrency[currencyCurrent.textContent]} = 1.00${singCurrency[currencyNew.textContent]}` :
      currencyExchange.textContent = `1.00${singCurrency[currencyCurrent.textContent]} = 
      ${Math.floor(currency[currencyCurrent.textContent] / currency[currencyNew.textContent] * 100) / 100}
      ${singCurrency[currencyNew.textContent]}`;
  },
  calculate = event => {
    const target = event.target || event;

    target.value = target.value.replace(/[^.,\d]/g, '');
    target.value = target.value.replace(/[,]/g, '.');
    target.value = target.value.substr(0, (target.value.search(/\./) + 1)) +
      target.value.slice((target.value.search(/\./) + 1)).replace(/\./g, '');

    if (target.id.replace('currency-value-', '') === 'current') {
      currencyValueNew.value =
      Math.floor(currency[currencyCurrent.textContent] * target.value / currency[currencyNew.textContent] * 100) / 100;
    }
    if (target.id.replace('currency-value-', '') === 'new') {
      currencyValueCurrent.value =
      Math.floor(currency[currencyNew.textContent] * target.value / currency[currencyCurrent.textContent] * 100) / 100;
    }
  },
  dropdown = event => {
    const closeDropdown = elem => elem.classList.remove('open');
    let target = event.target.closest('.combobox__select-currency_custom-single');

    if (target) {
      document.querySelectorAll('.combobox__select-currency_custom-single')
        .forEach(elem => {
          if (elem !== target) {
            elem.nextElementSibling.classList.remove('open');
            elem.querySelector('.combobox__selection_custom-arrow').classList.remove('open');
          }
        });
      target.nextElementSibling.classList.toggle('open');
      target.querySelector('.combobox__selection_custom-arrow').classList.toggle('open');
      return;
    }
    target = event.target.closest('.dropdown__currency-item');
    if (target) {
      if (target.parentElement.id.replace('currency-list-', '') === 'new') {
        currencyValueNew.value =
          Math.floor(currencyValueNew.value *
            currency[currencyNew.textContent] / currency[target.textContent] * 100) / 100;
        setCurrency(currencyCurrent.textContent, target.textContent);
        calculate(currencyValueNew);
      }
      if (target.parentElement.id.replace('currency-list-', '') === 'current') {
        currencyValueCurrent.value =
          Math.floor(currencyValueCurrent.value *
            currency[currencyCurrent.textContent] / currency[target.textContent] * 100) / 100;
        setCurrency(target.textContent, currencyNew.textContent);
        calculate(currencyValueCurrent);
      }
      render();
    }
    if (!event.target.closest('.dropdown') || target) {
      document.querySelectorAll('.dropdown').forEach(closeDropdown);
      document.querySelectorAll('.combobox__selection_custom-arrow').forEach(closeDropdown);
    }
  },
  init = () => {
    setCurrency('RUR', 'USD');
    render();
    document.addEventListener('click', dropdown);
    currencyValueNew.addEventListener('input', calculate);
    currencyValueCurrent.addEventListener('input', calculate);
  },
  getData = () => fetch('https://www.cbr-xml-daily.ru/daily_json.js', {
    method: 'GET',
    mode: 'cors'
  }).then(response => {
    if (response.status !== 200) {
      throw new Error('status network not 200');
    }
    return (response.json());
  }).then(({ Valute: { EUR, USD } }) => {
    currency[EUR.CharCode] = EUR.Value;
    currency[USD.CharCode] = USD.Value;
    init();
  }).catch(error => console.error(error));

getData();
