import createElement from "./createElement.js";
import * as el from "./elements.js";
let state;

function useState(initialValue) {
  state = state || initialValue;

  function setValue(newValue) {
    state = newValue;
    renderApp();
  }

  return [state, setValue];
}

function display() {
  const mainContainer = createElement({
    tag: "div",
    classList: ["mainContainer"],
  });

  let [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  /* ELEMENTS */
  const header = el.createHeader(mainContainer);
  const h1 = el.createH1(header);
  const searchDiv = el.createSearchFieldDiv(mainContainer);
  const input = el.createInput(searchDiv);
  const button = el.createButton(searchDiv, null);
  const ul = el.createUl(mainContainer);
  const h2 = el.createUlH2(ul);
  const list = el.createList({ items }, ul);
  const unfinishedUl = el.createUnfinishedUl(mainContainer);
  const unfinishedH2 = el.createUnfinishedH2(unfinishedUl);

  /* MODAL */

  const openModal = () => {
    modal.style.display = "flex";
    modalWrapper.style.display = "block";
  };
  const closeModal = () => {
    modal.style.display = modalWrapper.style.display = "none";
  };

  const addItem = () => {
    const inputValue = modalInput.value.trim();
    if (inputValue !== "") {
      setItems([...items, inputValue]);
      modalInput.value = "";
    }
    closeModal();
  };
  const setupInputChangeListener = (input, addItemButton) => {
    input.addEventListener("input", () => {
      addItemButton.style.backgroundColor = "blue";
    });
  };
  const modalWrapper = el.createModalWrapper(document.body);
  const modal = el.createModal(document.body);
  const modalContent = el.createModalContent(modal);
  const h2AndInputWrapper = el.createH2AndInputWrapper(modalContent);
  const modalH2 = el.createModalH2(h2AndInputWrapper);
  const modalInput = el.createModalInput(h2AndInputWrapper);
  const divForButtons = el.createDivforButtons(modalContent);
  const modalCancelButton = el.createModalCancelButton(
    divForButtons,
    closeModal
  );
  const modalAddItemButton = el.createModalAddItemButton(
    divForButtons,
    addItem
  );
  setupInputChangeListener(modalInput, modalAddItemButton);
  modal.style.display = modalWrapper.style.display = "none";

  button.addEventListener("click", openModal);

  /* SEARCH */
  input.addEventListener("input", (event) => {
    const query = event.target.value;

    const filterTasks = (query) => {
      const filteredTasks = items.filter((task) => {
        return task.toLowerCase().includes(query.toLowerCase());
      });
      return filteredTasks;
    };

    const filteredTasks = filterTasks(query);
    ul.innerHTML = "";
    const listItems = el.createList({ items: filteredTasks }, ul);
  });

  return [mainContainer, list, openModal, closeModal, addItem];
}

/* RENDER */
function App() {
  const [mainContainer] = display();
  return mainContainer;
}

function renderApp() {
  const appContainer = document.getElementById("functional-example");
  appContainer.innerHTML = "";
  appContainer.append(App());
}

(function () {
  renderApp();
})();

export {useState}