const searchLink = document.querySelector('.search-link');
const modal = document.querySelector('.modal');
const closingForm = document.querySelector('.closing-form');

searchLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal-closed');
});

closingForm.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.add('modal-closed');
});
