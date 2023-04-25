import * as el from "./elements.js";
import { addTask } from "./fetch.js";
const openModal = () => {
    const [modal, modalWrapper] = createModal();
    modal.style.display = modalWrapper.style.display = "flex";
  };
  

function createModal() {
  const modalWrapper = el.createModalWrapper(document.body);
  const modal = el.createModal(document.body);
  const modalContent = el.createModalContent(modal);
  const h2AndInputWrapper = el.createH2AndInputWrapper(modalContent);
  const modalH2 = el.createModalH2(h2AndInputWrapper);
  const modalInput = el.createModalInput(h2AndInputWrapper);
  const divForButtons = el.createDivforButtons(modalContent);
  const modalCancelButton = el.createModalCancelButton(divForButtons);
  const modalAddItemButton = el.createModalAddItemButton(divForButtons);

  modal.style.display = modalWrapper.style.display = "none";

  /* Button eventListeners */

  const closeModal = () => {
    modal.style.display = "none";
    modalWrapper.style.display = "none";
  };
  
  modalCancelButton.addEventListener("click", closeModal);
  modalAddItemButton.addEventListener("click", (e)=>{
    const inputValue = modalInput.value.trim();
    addTask(inputValue)
    closeModal;
  } );

  /* Input eventListeners */

 modalInput.addEventListener("input", () => {
  modalAddItemButton.style.backgroundColor = "blue";
});

  return [modal, modalWrapper];
}

export { openModal, createModal };
