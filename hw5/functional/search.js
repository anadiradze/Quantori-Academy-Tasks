import * as el from "./elements.js";

class Search {
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
        return task.toLowerCase().includes(query.toLowerCase());
      });
      return filteredTasks;
    };

    const unfinishedTasks = this.items.filter(
      (task) => !document.querySelector(".finishedUl").innerText.includes(task)
    );
    const finishedTasks = this.items.filter((task) =>
      document.querySelector(".finishedUl").innerText.includes(task)
    );
    const filteredTasks = filterTasks(query);
    const filteredUnfinishedTasks = unfinishedTasks.filter((task) =>
      task.toLowerCase().includes(query.toLowerCase())
    );

    this.ul.innerHTML = "";
    const listItems = el.createList(
      { items: filteredUnfinishedTasks },
      this.ul
    );
    localStorage.setItem("unfinishedTasks", JSON.stringify(unfinishedTasks)); // Save filteredUnfinishedTasks to localStorage
  }
}

export { Search };
