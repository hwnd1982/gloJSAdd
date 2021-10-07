import { dataRequest } from "./modules/dataRequest";
import { DropdownHandler } from './modules/DropdownHandler';

const
  today = new Date(),
  setCookie = (name, value, year, month, day, path, domain, secure) => {
    document.cookie = `${name}=${value}; ${
      year ? 'expires=' + new Date(year, month, day).toGMTString() : ''}; ${
      path ? '; path' + path : ''}${
      domain ? '; domain' + domain : ''}${
      secure ? '; secure' + secure : ''}`;
  };
let local = document.cookie.replace(/(local=)([A-Z]{2})/i, (match, key, value) => value);
if (!['DE', 'EN', 'RU'].includes(local) || !localStorage.localData) {
  do {
    local = prompt('Choose language (RU, EN, DE)...');
    if (local) {
      local = local.trim().toUpperCase();
    }
  } while (!['DE', 'EN', 'RU'].includes(local));
  setCookie('local', local, today.getFullYear(), today.getMonth(), today.getDay() + 10);

  dataRequest(DropdownHandler, local);
} else {
  new DropdownHandler(JSON.parse(localStorage.localData));
}
