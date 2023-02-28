(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-room-open-g]'),
        //====
        openNextBtn: document.querySelector('[data-modal-room-open-f]'),
        //====
        closeModalBtn: document.querySelector('[data-modal-room-close]'),
        modal: document.querySelector('[data-modal-room]'),
        body: document.querySelector('body'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    //===
    refs.openNextBtn.addEventListener('click', toggleNext);
    //===

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
        refs.body.classList.toggle('no-scroll');
    }
})();
