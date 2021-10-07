
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
  })(),
  loadingAnimation =
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
    </div>`,
  overlay = document.createElement('section');

export const dataRequest = (Handler, local) => {
  overlay.className = 'main overlay';
  overlay.innerHTML = loadingAnimation;
  document.body.append(overlay);
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
    new Handler(localData);
    setTimeout(() => overlay.remove(), 750);
  }).catch(error => console.error(error));
};
