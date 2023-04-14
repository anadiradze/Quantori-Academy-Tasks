 class TaskList {
    constructor(tasks) {
      this.tasks = tasks;
    }
  
    filterTasks(query) {
      const filteredTasks = this.tasks.filter((task) =>
        task.toLowerCase().includes(query.toLowerCase())
      );
      return filteredTasks;
    }
  }



  
  function updateElements(query) {


     const elements = document.querySelectorAll(".li");
    const taskList = new TaskList([...elements].map((element) => element.innerText.replace(/\s+/g, ' ').trim().toLowerCase()));
    const filteredTasks = taskList.filterTasks(query);
    
    // Update the DOM with the filtered tasks
    [...elements].forEach((element) => {
      const elementText = element.innerText.replace(/\s+/g, ' ').trim().toLowerCase();
      const pattern = new RegExp(`\\b${elementText}\\b`);
      if (pattern.test(filteredTasks.join(' '))) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
    console.log(filteredTasks) 

  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const searchField = document.querySelector(".searchfieldInput");
    if (searchField) {
      searchField.addEventListener("input", (event) => {
        const query = event.target.value;
        updateElements(query);
        console.log(query);
      });
    } else {
      console.error("Search field element not found in DOM");
    }
  });
  
  export { updateElements }; 
