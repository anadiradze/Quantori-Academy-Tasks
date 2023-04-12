import createElement from "./createElement.js";
(function () {
  let state = undefined;
  function useState(initialValue) {
    state = state || initialValue;

    function setValue(newValue) {
      state = newValue;
      renderApp();
    }

    return [state, setValue];
  }
  /* HEADER ELEMENTS  */
  function createHeader(parent) {
    return createElement({
      tag: "header",
      classList: ["header"],
      parent: parent,
    });
  }
  function createH1(parent) {
    return createElement({
      tag: "h1",
      classList: ["h1"],
      parent: parent,
      text: "To Do List",
    });
  }
  /* SEARCH FIELD ELEMENTS */
  function createSearchFieldDiv(parent) {
    return createElement({
      tag: "div",
      classList: ["searchfieldDiv"],
      parent: parent,
    });
  }

  function createInput(parent) {
    return createElement({
      tag: "input",
      attributes: {
        type: "text",
        placeholder: "Search...",
      },
      classList: ["searchfieldInput"],
      parent: parent,
    });
  }

  function createButton(parent, listener) {
    return createElement({
      tag: "button",
      classList: ["seachfieldButton"],
      text: "Add item",
      eventListener: { event: "click", listener: listener },
      parent: parent,
    });
  }

  /* LIST ELEMENTS */
  function createUl(parent) {
    return createElement({
      tag: "ul",
      parent: parent,
    });
  }
  function createUlH2(parent) {
    return createElement({
      tag: "h2",
      parent: parent,
      text: "All Tasks",
    });
  }
  function createList({ items }, parent) {
    return items.map((item) => {
      const li = createElement({
        tag: "li",
        parent: parent,
        text: item,
      });

      createElement({
        tag: "input",
        attributes: {
          type: "checkbox",
        },
        parent: li,
      });

      createElement({
        tag: "img",
        parent: parent,
        attributes: {
          src: "../assets/bin.svg",
        },
        parent: li,
      });
    });
  }

    /*COMPLETED LIST ELEMENTS */



  /* DISPLAY/APPEND ELEMENTS */
  function display() {
    const mainContainer = createElement({
      tag: "div",
      classList: ["mainContainer"],
    });
    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
    function addItem() {
      setItems([...items, `Item ${items.length + 1}`]);
    }
    const header = createHeader(mainContainer);
    const h1 = createH1(header);
    const searchfieldDiv = createSearchFieldDiv(mainContainer);
    const inputText = createInput(searchfieldDiv);
    const button = createButton(searchfieldDiv, addItem);
    const ul = createUl(mainContainer);
    const h2 = createUlH2(ul);
    const listItems = createList({ items }, ul);
    return [mainContainer, header, h1, searchfieldDiv, inputText, button, ul];
  }

  function App() {
    const [mainContainer, header, h1, searchfieldDiv, inputText, button, ul] =
      display();

    return mainContainer;
  }

  function renderApp() {
    const appContainer = document.getElementById("functional-example");
    appContainer.innerHTML = "";
    appContainer.append(App());
  }

  renderApp();
})();
