import './index.html';
import './css/style.css';
import './scss/style.scss';
import Storage from './js/components/Storage';

import Frontend from './js/components/Frontend';

const storage = new Storage('worker');
const frontend = new Frontend({
  firstName: 'Кирилл',
  lastName: 'Лавров',
  age: 39,
  gender: 'male',
  isChildren: true,
  profession: 'Front-end Developer',
  stack: ['html', 'css', 'scss', 'js', 'react'],
  experience: 'junior'
});
// console.log(storage.data);
// storage.add({ id: uid(),  test: 'for remove' });
// storage.data = [frontend.data];
frontend.data = { experience: 'middle' };
console.log(storage.data, frontend.data, Frontend.props);

