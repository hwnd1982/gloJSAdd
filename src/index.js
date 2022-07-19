import 'bootstrap/dist/css/bootstrap.min.css'
import './index.html'
import './css/index.css'
import './scss/index.scss'
import Storage from './js/components/Storage';
import Frontend from './js/components/Frontend';
import DomElement from './js/components/DomElement';
import ClassSelect from './js/components/ClassSelect';
import Form from './js/components/Form';
import Worker from './js/components/Worker';

const app =  document.getElementById('app');
const workerClasses = [Worker, Frontend];
const workerClassesProps = workerClasses.reduce((obj, Item) => {
  obj[Item.type] = Item.props
  
  return obj;
}, {});
const select = new ClassSelect(['form-select', 'mb-3'], {
  children: workerClasses, 
  action: event => form.render(workerClassesProps[event.target.value])
});
const form = new Form(app, storage);

const storage = new Storage('worker', workerClasses);
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

frontend.data = { experience: 'middle' };
storage.data = [frontend.data];

new DomElement('div', ['container', 'mt-5'], {
  parent: app,
  children: [
    new DomElement('div', ['row', 'mb-3'], {
      children: [new DomElement('div', ['col-lg-12'], {children: [
        select.elem,
        form.elem
      ]}).elem]
    }).elem]
});


