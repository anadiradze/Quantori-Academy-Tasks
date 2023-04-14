/* // Import the necessary elements
import {
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
// Create a function to create a modal

const createModalFunction = () => {
  const closeModal = () => {
    modal.style.display = "none";
    modalWrapper.style.display = "none";
  };

  const addItem = () => {
    const item = modalInput.value;
    closeModal();
  };

  const setupInputChangeListener = (input, addItemButton) => {
    input.addEventListener("input", () => {
      addItemButton.style.backgroundColor = "blue"; // Use backgroundColor instead of background
    });
  };

  const modalWrapper = createModalWrapper(document.body);
  const modal = createModal(document.body);
  const modalContent = createModalContent(modal);
  const H2AndInputWrapper = createH2AndInputWrapper(modalContent);
  const modalH2 = createModalH2(H2AndInputWrapper);
  const modalInput = createModalInput(H2AndInputWrapper);
  const divforButtons = createDivforButtons(modalContent);
  const modalCancelButton = createModalCancelButton(divforButtons, closeModal);
  const modalAddItemButton = createModalAddItemButton(divforButtons, addItem);
  //modal.style.display = "none"; 
  modalWrapper.style.display = "none";

  setupInputChangeListener(modalInput, modalAddItemButton); 

  const openModal = () => {
    modal.style.display = "flex";
    modalWrapper.style.display = "block"; // Show the modal backdrop
  };

  return {
    openModal,
    closeModal,
    addItem,
  };
};

// Create an instance of the Modal function
const modalInstance = createModalFunction();

// Get the "AddItemButton" element
const addItemButton = document.querySelector(".newTaskButton");

// Add event listener to the "AddItemButton" to open the modal when clicked
addItemButton.addEventListener("click", () => {
  modalInstance.openModal();
  console.log("opened");
});

export { modalInstance };

 */


































/* // Import the necessary elements
import {
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

7; // Create a class for the modal
class Modal {
  constructor() {
    this.modalWrapper = createModalWrapper(document.body);
    this.modal = createModal(document.body);
    this.modalContent = createModalContent(this.modal);
    this.H2AndInputWrapper = createH2AndInputWrapper(this.modalContent);
    this.modalH2 = createModalH2(this.H2AndInputWrapper);
    this.modalInput = createModalInput(this.H2AndInputWrapper);
    this.divforButtons = createDivforButtons(this.modalContent);
    this.modalCancelButton = createModalCancelButton(
      this.divforButtons,
      this.closeModal.bind(this)
    );
    this.modalAddItemButton = createModalAddItemButton(
      this.divforButtons,
      this.addItem.bind(this)
    );
    this.modal.style.display = "none"; // Initially hide the modal
    this.modalWrapper.style.display = "none";
    this.setupInputChangeListener(); // Call the setupInputChangeListener method to set up the event listener
  }

  // Method to open the modal
  openModal() {
    this.modal.style.display = "flex";
    this.modalWrapper.style.display = "block"; // Show the modal backdrop
  }

  // Method to close the modal
  closeModal() {
    this.modal.style.display = "none";
    this.modalWrapper.style.display = "none";
  }

  // Method to handle adding an item
  addItem() {
    // Get the input value from the modal input field
    const item = this.modalInput.value

    this.closeModal();
  }

  // Method to set up event listener for input change
  setupInputChangeListener() {
    this.modalInput.addEventListener("input", () => {
      this.modalAddItemButton.style.backgroundColor = "blue"; // Use backgroundColor instead of background
    });
  }
}

// Create an instance of the Modal class
const modalInstance = new Modal();

// Get the "AddItemButton" element
const addItemButton = document.querySelector(".newTaskButton");

// Add event listener to the "AddItemButton" to open the modal when clicked
addItemButton.addEventListener("click", () => {
  modalInstance.openModal();
  console.log("opened");
});
export { modalInstance };
 */
