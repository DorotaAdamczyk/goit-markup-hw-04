(() => {
  Constrefs = {
    openModalBtn: dokument.querySelector("[data-modal-open]"),
    closeModalBtn: dokument.querySelector("[data-modal-close]"),
    modalny: dokument.querySelector("[data-modal]"),
  };

  sygn.openModalBtn.addEventListener("click", toggleModal);
  sygn.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    sygn.modalny.classList.toggle("is-hidden");
  }
})();
