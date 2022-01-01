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

document.getElementById('send').addEventListener('click', sendJSON);
document.getElementById('edit').addEventListener('click', editJSON);
