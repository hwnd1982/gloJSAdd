export class Overlay {
  constructor() {
    const
      script = (() => {
        const obj = { style: '', html: '' };

        for (let i = 1; i <= 12; i++) {
          if (i > 1) {
            obj.style +=
        ` .sk-circle-bounce .sk-circle-${i} {
            transform: rotate(${30 * (i - 1)}deg);
          }
          .sk-circle-bounce .sk-circle-${i}:before {
            animation-delay: ${-1.2 + (i - 1) / 10}s;
          }  
        `;
          }
          obj.html += `<div class="sk-child sk-circle-${i}"></div>
        `;
        }
        return obj;
      })();
    this.localSelectMenu =
      ` <div class="menu">
          <div id="RU" class="item">RU</div>
          <div id="EN" class="item">EN</div>
          <div id="DE" class="item">DE</div>
        </div>
        <style>
          .menu {
            position: absolute;
            padding: 20px 20px;
            font-size: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            top: 25%;
            transform: translate(0, -50%);
            width: 240px;
            height: 90px;
            background-color: #ffffff;
            border-radius: 45px;
          }
          .item {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            border: 2px solid #19b5fe;
            background-color: #ffffff;
            cursor: pointer;
          }
          .item:hover {
            background-color: #b7b7b7;
          }
          .selected, .selected:hover {
            background-color: #19b5fe;
          }
        </style>`;
    this.loadingAnimation =
      `<style>
        .sk-circle-bounce {
          width: 100px;
          height: 100px;
          position: relative;
          margin: auto;
        }
        .sk-child {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }
        ${script.style}
        .sk-child:before {
          content: "";
          display: block;
          margin: 0 auto;
          width: 15%;
          height: 15%;
          background-color: #19b5fe;
          border-radius: 100%;
          animation: sk-circle-bounce-delay 1.2s infinite ease-in-out both;
        }
        @keyframes sk-circle-bounce-delay {
          0%,
          80%,
          100% {
              transform: scale(0);
            }
          40% {
              transform: scale(1);
            }
          }
        </style>
        <div class="sk-circle-bounce">
          ${script.html}
        </div>`;
    this.today = new Date(),
    this.overlay = document.querySelector('.main.overlay') || document.createElement('section');
  }
  setCookie(name, value, year, month, day, path, domain, secure) {
    document.cookie = `${name}=${value}; ${
      year ? 'expires=' + new Date(year, month, day).toGMTString() : ''}; ${
      path ? '; path' + path : ''}${
      domain ? '; domain' + domain : ''}${
      secure ? '; secure' + secure : ''}`;
  }
  showLocalSelectMenu(action, ...args) {
    this.overlay.className = 'main overlay';
    this.overlay.innerHTML = this.localSelectMenu;
    document.body.append(this.overlay);
    this.overlay.firstElementChild.addEventListener('click', ({ target }) => {
      if (!target.matches('.item')) {
        return;
      }
      target.classList.add('selected');
      this.setCookie('local', target.id, this.today.getFullYear(), this.today.getMonth(), this.today.getDay() + 10);
      setTimeout(action, 500, ...args, target.id);
    });
  }
  showLoading() {
    this.overlay.className = 'main overlay';
    this.overlay.innerHTML = this.loadingAnimation;
    document.body.append(this.overlay);
  }
  clean() {
    this.overlay.textContent = '';
  }
  remove() {
    this.overlay.remove();
  }
}

export const dataRequest = (Handler, local) => {
  const overlay = new Overlay();

  overlay.showLoading();
  return fetch('../db/db_cities.json', {
    method: 'GET',
    mode: 'same-origin'
  }).then(response => {
    if (response.status !== 200) {
      throw new Error('status network not 200');
    }
    return (response.json());
  }).then(data => {
    const
      localCountryName = { RU: 'Россия', EN: 'United Kingdom', DE: 'Deutschland' }[local],
      localData = data[local].sort((a, b) => (a.country === b.country ? 0 : a.country > b.country ? 1 : -1))
        .reduce((data, item) => {
          item.country === localCountryName ? data.unshift(item) : data.push(item);
          return data;
        }, []);
    localStorage.clear();
    localStorage.setItem('localData', JSON.stringify(localData));
    new Handler(localData, local);
    setTimeout(overlay.remove.bind(overlay), 750);
  }).catch(error => console.error(error));
};
