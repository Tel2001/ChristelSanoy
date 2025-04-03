function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

//MODAL
// Get DOM elements
// Get DOM elements
const projectCard = document.getElementById('projectCard');
const modal = document.getElementById('ece');
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

//project card 2
const projectCard2 = document.getElementById('projectCard2');
const modal2 = document.getElementById('Shoppersville');
const modalClose2 = document.getElementById('modalClose2');

projectCard2.addEventListener('click', () => {
  modal2.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent body from scrolling
});

// Close modal when the close button is clicked
modalClose2.addEventListener('click', () => {
  modal2.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore body scrolling
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === modal2) {
    modal2.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore body scrolling
  }
});


//project card 3
const projectCard3 = document.getElementById('projectCard3');
const modal3 = document.getElementById('bipinoy');
const modalClose3 = document.getElementById('modalClose3');

projectCard3.addEventListener('click', () => {
  modal3.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent body from scrolling
});

// Close modal when the close button is clicked
modalClose3.addEventListener('click', () => {
  modal3.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore body scrolling
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === modal3) {
    modal3.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore body scrolling
  }
});


//project card 3
const projectCard4 = document.getElementById('projectCard4');
const modal4 = document.getElementById('oragontrader');
const modalClose4 = document.getElementById('modalClose4');

projectCard4.addEventListener('click', () => {
  modal4.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent body from scrolling
});

// Close modal when the close button is clicked
modalClose4.addEventListener('click', () => {
  modal4.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore body scrolling
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === modal4) {
    modal4.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore body scrolling
  }
});