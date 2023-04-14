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
} from "./elements.js";

let state = undefined;
(function () {
  function useState(initialValue) {
    state = state || initialValue;

    function setValue(newValue) {
      state = newValue;
      renderApp();
    }

    return [state, setValue];
  }

  /* DISPLAY/APPEND ELEMENTS */
  function display() {
    const mainContainer = createElement({
      tag: "div",
      classList: ["mainContainer"],
    });

    let [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

    const header = createHeader(mainContainer);
    const h1 = createH1(header);
    const searchfieldDiv = createSearchFieldDiv(mainContainer);
    const inputText = createInput(searchfieldDiv);
    const button = createButton(searchfieldDiv, newTaskButton);
    const ul = createUl(mainContainer);
    const h2 = createUlH2(ul);
    const listItems = createList({ items }, ul);

    function newTaskButton() {
      const inputValue = inputText.value.trim();
      if (inputValue !== "") {
        setItems([...items, inputValue]); // Add the input value as a new item to the items array
        inputText.value = ""; // Clear the input value
      }
    }
    return [
      mainContainer,
      header,
      h1,
      searchfieldDiv,
      inputText,
      button,
      ul,
      listItems,
    ];
  }

  function App() {
    const [mainContainer, header, h1, searchfieldDiv, inputText, button, ul] =
      display();
    return mainContainer;
  }
  console.log(state, "state");
  function renderApp() {
    const appContainer = document.getElementById("functional-example");
    appContainer.innerHTML = "";
    appContainer.append(App());
  }

  renderApp();
})();
