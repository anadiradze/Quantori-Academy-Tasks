/* HEADER ELEMENTS  */
import createElement from "./createElement.js";
import { deleteTask, updateTask } from "./fetch.js";

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
    classList: ["newTaskButton"],
    text: "+New Task",
    eventListener: { event: "click", listener: listener },
    parent: parent,
  });
}

/* LIST ELEMENTS */
function createUl(parent) {
  return createElement({
    tag: "ul",
    parent: parent,
    classList: ["ul"],
  });
}
function createUlH2(parent) {
  return createElement({
    tag: "h2",
    parent: parent,
    text: "All Tasks",
  });
}
function createUnfinishedUl(parent) {
  return createElement({
    tag: "ul",
    parent: parent,
    classList: ["finishedUl"],
  });
}
function createUnfinishedH2(parent) {
  return createElement({
    tag: "h2",
    parent: parent,
    text: "Completed Tasks",
  });
}
function createList(items, parent) {
  console.log(items, "items from elements.js");
  return items.map((item) => {
    const li = createElement({
      tag: "li",
      parent: parent,
      text: item.title,
      classList: ["li"],
    });

    createElement({
      tag: "input",
      attributes: {
        type: "checkbox",
      },
      parent: li,
      classList: ["checkbox"],
      eventListener: {
        event: "click",
        listener: (e) => {
          const isChecked = e.target.checked;
          const parentLi = e.target.closest("li");
          if (isChecked) {
            document.querySelector(".finishedUl").append(parentLi);
            // items.find((t) => {
            //   if(t.id === item.id){
            //     updateTask(t.id, true);
            //   }
            // });
          } else {
            document.querySelector(".ul").append(parentLi);
            // items.find((t) => {
            //   updateTask(t.id, false);
            // });
          }
        },
      },
    });

    createElement({
      tag: "img",
      attributes: {
        src: "../assets/bin.svg",
      },
      parent: li,
      classList: ["removeTask"],
      eventListener: {
        event: "click",
        listener: function removalListener(e) {
          items.find((t) => {
            if (e.srcElement.parentNode.innerText === t.title) {
              deleteTask(t.id);
            }
          });
        },
      },
    });
  });
}

/* MODAL ELEMENTS */
function createModalWrapper(parent) {
  return createElement({
    tag: "div",
    classList: ["modalWrapper"],
    parent: parent,
  });
}
function createModal(parent) {
  return createElement({
    tag: "div",
    classList: ["modal"],
    parent: parent,
  });
}
function createModalContent(parent) {
  return createElement({
    tag: "div",
    classList: ["modalContent"],
    parent: parent,
  });
}
function createH2AndInputWrapper(parent) {
  return createElement({
    tag: "div",
    classList: ["H2AndInputWrapper"],
    parent: parent,
  });
}
function createModalH2(parent) {
  return createElement({
    tag: "h2",
    parent: parent,
    text: "Add New Task",
  });
}
function createModalInput(parent) {
  return createElement({
    tag: "input",
    attributes: {
      type: "text",
      placeholder: "Enter task...",
    },
    classList: ["modalInput"],
    parent: parent,
  });
}
function createDivforButtons(parent) {
  return createElement({
    tag: "div",
    classList: ["divforButtons"],
    parent: parent,
  });
}

function createModalCancelButton(parent) {
  return createElement({
    tag: "button",
    classList: ["modalCancelButton"],
    text: "Cancel",
    parent: parent,
  });
}

function createModalAddItemButton(parent) {
  return createElement({
    tag: "button",
    classList: ["modalAddItemButton"],
    text: "Add Item",
    parent: parent,
  });
}

export {
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
  createUnfinishedUl,
  createUnfinishedH2,
};
