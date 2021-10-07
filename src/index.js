import data from "./modules/db_cities";
import { DropdownHandler } from './modules/DropdownHandler';

const
  local = 'RU',
  localData = data[local],
  localCountryName = { RU: 'Россия', EN: 'United Kingdom', DE: 'Deutschland' }[local];

new DropdownHandler(localData, localCountryName);

