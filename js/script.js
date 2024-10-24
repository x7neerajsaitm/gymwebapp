//Js
document.querySelector(".mobile-btn").addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("active");
});
// JavaScript to handle modal
function openModal() {
  document.getElementById('loginModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('loginModal').style.display = 'none';
}

// Event listeners for buttons
document.querySelector('.btn.mt').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  openModal();
});

document.querySelector('.btn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  openModal();
});

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  // Add your login logic here (e.g., validation, AJAX call)
  alert('Login submitted!');
  closeModal(); // Close modal after submission
});