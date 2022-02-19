const result = document.querySelector('.result');

async function getJSON() {
  const response = await fetch('./data.json', {
    method: 'GET',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
  }).catch(() => {
    throw console.log('Загрузить запись не удалось...');
  });

  return response.json();
}

// эта функция сработает при нажатии на кнопку
async function sendJSON() {
  const name = document.querySelector('#name');
  const lastname = document.querySelector('#lastname');
  const data = JSON.stringify({ "name": name.value, "lastname": lastname.value });

  const response = await fetch('./json.php', {
    method: 'POST',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  }).catch(() => {
    throw console.log('Отправить запись не удалось...');
  });

  result.innerHTML = JSON.stringify(await response.json());
}

async function editJSON() {
  const data = await getJSON();
  const newData = data.map(({ name, lastname }) => {
    let nameRepeat = 0, lastnameRepeat = 0;

    data.map(item => {
      if (item.name === name) nameRepeat++;
      if (item.lastname === lastname) lastnameRepeat++;
    });
    return { name, nameRepeat, lastname, lastnameRepeat };
  });

  const response = await fetch('./edit.php', {
    method: 'POST',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newData)
  }).catch(() => {
    throw console.log('Отправить запись не удалось...');
  });

  result.innerHTML = JSON.stringify(await response.json());
}

async function createHTMLFile() {
  const { value } = document.querySelector('#file');

  const response = await fetch('./create.php', {
    method: 'POST',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ filename: value })
  }).catch(() => {
    throw console.log('Отправить запись не удалось...');
  });

  const ready = await response.json();
  if (ready) location = `./${value}.html`;
}


const maskInput = (selector, mask) => {
  const elems = document.querySelectorAll(selector);
  const masked = ({ target }) => {
    let delta = 0;
    const cursorPosition  = target.selectionStart;
    target.value = mask.split('').map((char, index) => {
      const value = target.value.split('');

      if (value[index]) {
        if (/\d/.test(value[index])) {
          if (/[)(+\-.\s]/.test(char)) {
            const reg = new RegExp(`[${char}][)(+\\-.\\s]*`);

            char = mask.match(reg)[0];
            if (index < cursorPosition) delta = char.length;
            return char + value[index];
          }
        } else {
          if (!/[)(+\-.\s]/.test(char))
            return '';
        }
        return value[index];
      } else return '';
    }).join('');

    target.selectionStart = cursorPosition + delta;
    target.selectionEnd = cursorPosition + delta;
  };
  const focus = ({ target }) =>
    (target.value.length <= mask.indexOf('_') ? mask.slice(0, mask.indexOf('_')) : target.value);
  const blur = ({ target }) =>
    (target.value.length <= mask.indexOf('_') ? '' : target.value);

  elems.forEach(elem => {
    elem.addEventListener("input", event => masked(event));
    elem.addEventListener("focus", event => event.target.value = focus(event));
    elem.addEventListener("blur", event => event.target.value = blur(event));
  });
};

maskInput('input', '+7 (___) ___-__-__');
document.getElementById('send').addEventListener('click', sendJSON);
document.getElementById('edit').addEventListener('click', editJSON);
document.getElementById('create').addEventListener('click', createHTMLFile);
