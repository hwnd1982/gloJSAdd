import "bootstrap/dist/css/bootstrap.min.css";
import "./index.html";
import "./css/index.css";
import "./scss/index.scss";
import Storage from "./js/components/Storage";
import Frontend from "./js/components/Frontend";
import DomElement from "./js/components/DomElement";
import ClassSelect from "./js/components/ClassSelect";
import Form from "./js/components/Form";
import Worker from "./js/components/Worker";
import Table from "./js/components/Table";

const workerClasses = [Worker, Frontend];
const workerClassesProps = workerClasses.reduce((obj, Item) => {
  obj[Item.type] = Item.props;

  return obj;
}, {});

const storage = new Storage("worker", workerClasses);
const table = new Table(storage);
const form = new Form(table);
const select = new ClassSelect(form);

const query = new DomElement("div", ["col-lg-12"], {
  children: [select.elem, form.elem],
});
const veiw = new DomElement("div", ["col-lg-12"], { children: [table.elem] });

const app = new DomElement("div", ["container", "mt-5"], {
  parent: document.getElementById("app"),
  children: [query.elem, veiw.elem],
});
