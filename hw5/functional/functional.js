import createElement from "./createElement.js";
import {
  createHeader,
  createH1,
  createSearchFieldDiv,
  createInput,
  createButton,
  createUl,
  createUlH2,
  createList,
  createModal,
  createModalInput,
  createDivforButtons,
  createModalCancelButton,
  createModalAddItemButton,
  createModalContent,
  createModalWrapper,
  createModalH2,
  createH2AndInputWrapper,
} from "./elements.js";

let state = undefined;

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

  // Define closeModal and addItem functions
  const closeModal = () => {
    modal.style.display = "none";
    modalWrapper.style.display = "none";
  };

  const addItem = () => {
    const inputValue = modalInput.value.trim();
    if (inputValue !== "") {
      setItems([...items, inputValue]); // Add the input value as a new item to the items array
      inputText.value = ""; // Clear the input value
    }
    closeModal();
  };

  const header = createHeader(mainContainer);
  const h1 = createH1(header);
  const searchfieldDiv = createSearchFieldDiv(mainContainer);
  const inputText = createInput(searchfieldDiv);
  const button = createButton(searchfieldDiv, null);
  const ul = createUl(mainContainer);
  const h2 = createUlH2(ul);
  const listItems = createList({ items }, ul);

  // Add event listener to the "AddItemButton" to open the modal when clicked
  const modalWrapper = createModalWrapper(document.body);
  const modal = createModal(document.body);
  const modalContent = createModalContent(modal);
  const H2AndInputWrapper = createH2AndInputWrapper(modalContent);
  const modalH2 = createModalH2(H2AndInputWrapper);
  const modalInput = createModalInput(H2AndInputWrapper);
  const divforButtons = createDivforButtons(modalContent);
  const modalCancelButton = createModalCancelButton(divforButtons, closeModal);
  const modalAddItemButton = createModalAddItemButton(divforButtons, addItem);
  modal.style.display = "none";
  modalWrapper.style.display = "none";

  const setupInputChangeListener = (input, addItemButton) => {
    input.addEventListener("input", () => {
      addItemButton.style.backgroundColor = "blue"; // Use backgroundColor instead of background
    });
  };

  setupInputChangeListener(modalInput, modalAddItemButton);

  const openModal = () => {
    modal.style.display = "flex";
    modalWrapper.style.display = "block"; // Show the modal backdrop
  };

  button.addEventListener("click", () => {
    openModal();
    console.log("opened");
  });

  return [
    mainContainer,
    header,
    h1,
    searchfieldDiv,
    inputText,
    button,
    ul,
    listItems,
    openModal,
    closeModal,
    addItem,
  ];
}

function App() {
  const [mainContainer] = display();
  return mainContainer;
}

console.log(state, "state");

function renderApp() {
  const appContainer = document.getElementById("functional-example");
  appContainer.innerHTML = "";
  appContainer.append(App());
}


(function () {
  renderApp();
})();
