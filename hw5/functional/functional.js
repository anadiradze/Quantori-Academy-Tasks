import createElement from "./createElement.js";
import * as el from "./elements.js";
//import { Search } from "./search.js";
import { getAllTasks } from "./fetch.js";
import { openModal, createModal } from "./modal.js";
import { filterTasks } from "./search.js";

function display(items) {
  const mainContainer = createElement({
    tag: "div",
    classList: ["mainContainer"],
  });

  const header = el.createHeader(mainContainer);
  const h1 = el.createH1(header);
  const searchDiv = el.createSearchFieldDiv(mainContainer);
  const input = el.createInput(searchDiv);
  const button = el.createButton(searchDiv, null);
  const ul = el.createUl(mainContainer);
  const h2 = el.createUlH2(ul);
  const list = el.createList(items, ul);
  const unfinishedUl = el.createUnfinishedUl(mainContainer);
  const unfinishedH2 = el.createUnfinishedH2(unfinishedUl);
  button.addEventListener("click", openModal)

  input.addEventListener("input", event => {
    const searchQuery = event.target.value;
    const filteredTasks = filterTasks(items, searchQuery);
  });
  return [mainContainer];

}

/* RENDER */
(function () {
  getAllTasks((items) => {

    function App() {
      const [mainContainer] = display(items);
      return mainContainer;
    }

    function renderApp() {
      const appContainer = document.getElementById("functional-example");
      appContainer.innerHTML = "";
      appContainer.append(App());
    }
    renderApp();

  });
})();
