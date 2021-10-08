import { dataRequest, Overlay } from "./modules/dataRequest";
import { DropdownHandler } from './modules/DropdownHandler';

const
  overlay = new Overlay(),
  local = document.cookie.replace(/(local=)([A-Z]{2})/i, (match, key, value) => value);
!['DE', 'EN', 'RU'].includes(local) || !localStorage.localData ?
  overlay.showLocalSelectMenu(dataRequest, DropdownHandler) :
  new DropdownHandler(JSON.parse(localStorage.localData), local);
