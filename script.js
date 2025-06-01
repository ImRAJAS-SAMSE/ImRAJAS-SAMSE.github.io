`use strict`;

document.querySelector(".JS").addEventListener("click", function () {
  location.replace("myprojects.html");
});

document.querySelector(".PI").addEventListener("click", function () {
  location.replace("aboutme.html");
});

// Dark Mode Toggle Logic
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Function to enable dark mode
function enableDarkMode() {
  body.classList.add('dark-mode');
  localStorage.setItem('darkModeStatus', 'enabled');
  // Optional: Update button text
  // darkModeToggle.textContent = 'Disable Dark Mode';
}

// Function to disable dark mode
function disableDarkMode() {
  body.classList.remove('dark-mode');
  localStorage.setItem('darkModeStatus', 'disabled');
  // Optional: Update button text
  // darkModeToggle.textContent = 'Enable Dark Mode';
}

// Event listener for the toggle button
darkModeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

// Check localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
  const darkModeStatus = localStorage.getItem('darkModeStatus');
  if (darkModeStatus === 'enabled') {
    enableDarkMode();
  } else {
    // By default, or if 'disabled', light mode is active.
    // No need to call disableDarkMode() here as styles are default.
    // However, if you have specific light mode JS logic, call it here.
  }
});
