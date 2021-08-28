'use strict';

const
  getFullName = () => {
    let fullName = prompt('Введите свое Имя и Фамилию:');
    if (fullName) {
      fullName = fullName.trim().split(' ').map(item => item = item[0].toUpperCase() + item.slice(1));
      fullName = fullName.length === 2 ? fullName : false;
    }
    return fullName;
  },
  getUserLogin = (user) => {
    for (let key in user) {
      if (['firstName', 'lastName', 'dete'].indexOf(key) === -1) {
        return key;
      }
    }
  },
  getNewLogin = () => {
    const userList = localStorage.userList ? JSON.parse(localStorage.userList) : [];
    let login, checkMatch;

    do {
      login = prompt('Придумайте Логин:');
      checkMatch = userList.reduce((checkMatch, item) => {
        if (getUserLogin(item) === login) {
          return true;
        }
        return checkMatch;
      }, false);
      if (checkMatch) {
        alert('Этот Логин недоступен!');
      }
    } while (checkMatch || !login);
    return login;
  },
  getField  = (message) => {
    let value;
    do {
      value = prompt(message);
    } while (!value);
    return value;
  },
  getDate = () => {
    const today = new Date();
    return `${
      today.toLocaleDateString('ru', {year: 'numeric', month: 'long',day: 'numeric'})
    }, ${
      today.toLocaleTimeString('ru', {hour: 'numeric', minute: 'numeric', second: 'numeric'})
    }`;
  },
    render = () => {
    const
      userList = localStorage.userList ? JSON.parse(localStorage.userList) : [],
      userListElem = document.querySelector('.users-list');

    userListElem.textContent = '';
    userList.forEach(item => {
      const li = document.createElement('li');
      let btn = document.createElement('button');

      li.classList = 'user';
      li.id = getUserLogin(item);
      li.textContent = `Имя: ${item.firstName}, Фамилия: ${item.lastName}, зарегистрирован: ${item.date}`;
      btn.className = 'del';
      btn.textContent = 'Удалить';
      userListElem.append(li);
      btn = li.appendChild(btn);
      btn.addEventListener('click', (event) => {
        let userList = localStorage.userList ? JSON.parse(localStorage.userList) : [];
    
        localStorage.userList = JSON.stringify(
          userList.filter(item => {
            if (!item[event.target.parentElement.id]) {
              return item;
            }
          })
        );
        render();
      });
    });
  },
  deleteUser = (event) => {
    let userList = localStorage.userList ? JSON.parse(localStorage.userList) : [];
    
    localStorage.userList = JSON.stringify(
      userList.filter(item => {
        if (!item[event.target.parentElement.id]) {
          return item;
        }
      })
    );
    render();
  },
  newUser = () => {
    const 
      userList = localStorage.userList ? JSON.parse(localStorage.userList) : [],
      newUser = {}, 
      fullName = getFullName();

    if (fullName) {
      newUser.firstName = fullName[0];
      newUser.lastName = fullName[1];
      newUser[getNewLogin(userList)] = getField('Придумайте Пароль:');
      newUser.date = getDate();
      userList.push(newUser);
      localStorage.userList = JSON.stringify(userList);
      render();
    }
  },
  signIn = () => {
    const 
      userList = localStorage.userList ? JSON.parse(localStorage.userList) : [],
      login = getField('Введите Логин'),
      pass = getField('Введите Пароль');
    let userName;

    userList.forEach(item => {
      if (item[login] === pass) {
        userName = item.firstName;
      }
    });
    if (userName) {
      document.querySelector('.greeting').textContent = `Здравствуйте, ${userName}!`;
    } else {
      alert('Пользователь не найден!');
    }
  };

document.querySelector('.sign-up').addEventListener('click', newUser);
document.querySelector('.sign-in').addEventListener('click', signIn);
render();