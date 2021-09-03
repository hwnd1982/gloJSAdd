const debounce = (fn, ms) => {
    let
      lastCall = 0,
      lastCallTimer = 0;

    return (...args) => {
      const prevCall = lastCall;
      lastCall = Date.now();

      if (prevCall && (lastCall - prevCall) < ms) {
        clearInterval(lastCallTimer);
      }
      lastCallTimer = setTimeout(() => fn(...args), ms);
    };
  },
  showText = value => document.getElementById('text').textContent = value,
  showTextDebounce = debounce(showText, 300);

document.getElementById('input').addEventListener('input', event => showTextDebounce(event.target.value));
