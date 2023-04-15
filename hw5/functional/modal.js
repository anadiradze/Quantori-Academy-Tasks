
class CheckboxManager {
  constructor(checkboxSelector, ulSelector, finishedUlSelector) {
    this.checkboxes = document.querySelectorAll(checkboxSelector);
    this.ul = document.querySelector(ulSelector);
    this.finishedUl = document.querySelector(finishedUlSelector);
    this.init();
  }

  init() {
    this.checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", (event) => {
        this.handleCheckboxChange(event);
      });
    });
  }

  handleCheckboxChange(event) {
    const isChecked = event.target.checked;
    const parentLi = event.target.closest("li");
    if (isChecked) {
      this.finishedUl.append(parentLi);
    } else {
      this.ul.append(parentLi);
    }
  }
}

const checkboxManager = new CheckboxManager(".checkbox", ".ul", ".finishedUl");

export {checkboxManager}
