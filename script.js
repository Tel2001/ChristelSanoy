function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

//MODAL
// Get DOM elements
// Get DOM elements
const projectCard = document.getElementById('projectCard');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');

// Open modal when card is clicked
projectCard.addEventListener('click', () => {
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent body from scrolling
});

// Close modal when the close button is clicked
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore body scrolling
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore body scrolling
  }
});