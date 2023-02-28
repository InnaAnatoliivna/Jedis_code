(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-prices-open]'),
    // ===for 4 btn
    openSecondBtn: document.querySelector('[data-modal-prices-open-a]'),
    openThirdBtn: document.querySelector('[data-modal-prices-open-b]'),
    openFourthBtn: document.querySelector('[data-modal-prices-open-c]'),
    //========
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal-prices]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    //======
    refs.closeSecondBtn.addEventListener('click', toggleSecond);
    refs.closeThirdBtn.addEventListener('click', toggleThird);
    refs.closeFourthBtn.addEventListener('click', toggleFourth);
    //========
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
