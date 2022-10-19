import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import "./index.html";

import Storage from "./js/components/elements/Storage";
import Frontend from "./js/components/profession/Frontend";
import DomElement from "./js/components/elements/DomElement";
import ClassSelect from "./js/components/elements/ClassSelect";
import Form from "./js/components/elements/Form";
import Worker from "./js/components/profession/Worker";
import Table from "./js/components/elements/Table";
import Runner from "./js/components/profession/Runner";

const workerClasses = [Worker, Frontend, Runner];

const storage = new Storage("worker", workerClasses);

const table = new Table(storage);
const form = new Form(storage);
const select = new ClassSelect(storage);
const query = new DomElement("div", ["col-lg-12"], { children: [select.elem, form.elem] });
const veiw = new DomElement("div", ["col-lg-12"], { children: [table.elem] });

new DomElement("div", ["container", "mt-5"], {
  parent: document.getElementById("app"),
  children: [query.elem, veiw.elem],
});
