const modal = document.getElementById('modal');
const maskModal = document.querySelector('.modal-mask');

function showModal() {
  modal.style.opacity = '1';
  maskModal.style.visibility = 'visible';
}

function closeModal() {
    modal.style.opacity = '0';
    maskModal.style.visibility = 'hidden';
  }