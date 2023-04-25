
import * as el from "./elements.js";
import { getAllTasks } from "./fetch.js";


/* class Search {
  constructor(input, items, ul) {
    this.input = input;
    this.items = items;
    this.ul = ul;
    this.input.addEventListener("input", this.handleSearch.bind(this));
  }

  handleSearch(event) {
    const query = event.target.value;
    const filterTasks = (query) => {
      const filteredTasks = this.items.filter((task) => {
        return task.title.toLowerCase().includes(query.toLowerCase());
      });
      return filteredTasks;
    };

    const unfinishedTasks = this.items.filter(
      (task) =>
        !document.querySelector(".finishedUl").innerText.includes(task.title)
    );
    const finishedTasks = this.items.filter((task) =>
      document.querySelector(".finishedUl").innerText.includes(task.title)
    );
    const filteredTasks = filterTasks(query);
    const filteredUnfinishedTasks = unfinishedTasks.filter((task) =>
      task.title.toLowerCase().includes(query.toLowerCase())
    );

    this.ul.innerHTML = "";
    const listItems = el.createList({ items: filteredUnfinishedTasks }, this.ul);

    localStorage.setItem("unfinishedTasks", JSON.stringify(unfinishedTasks)); // Save unfinishedTasks to localStorage

    localStorage.setItem("finishedTasks", JSON.stringify(finishedTasks)); // Save finishedTasks to localStorage

    const finishedUl = document.querySelector(".finishedUl");
    finishedUl.innerHTML = "";
    el.createList({ items: finishedTasks }, finishedUl); // Update finishedUl with finishedTasks
  }
}

const input = document.querySelector("input");
const ul = document.querySelector(".unfinishedUl");

export { Search };
 */

function filterTasks(tasks, searchQuery) {
  return tasks.filter(task => {
    return (
      !task.isCompleted && task.title && task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
}


export {filterTasks}