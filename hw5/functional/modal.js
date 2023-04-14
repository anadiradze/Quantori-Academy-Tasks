// Import the necessary elements
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

// Create a class for the modal
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
    const item = this.modalInput.value;

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
});
export { Modal };
