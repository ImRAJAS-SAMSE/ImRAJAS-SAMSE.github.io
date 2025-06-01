// Theme Toggle Logic for Drum Kit
const themeToggleDrumKit = document.getElementById('themeToggleDrumKit');
const bodyDrumKit = document.body;
const drumKitThemeStatusKey = 'drumKitThemeStatus';

function applyDrumKitTheme() {
  const currentTheme = localStorage.getItem(drumKitThemeStatusKey);
  if (currentTheme === 'light') {
    bodyDrumKit.classList.add('light-mode');
    if (themeToggleDrumKit) themeToggleDrumKit.textContent = 'Toggle Dark Theme';
  } else {
    bodyDrumKit.classList.remove('light-mode');
    if (themeToggleDrumKit) themeToggleDrumKit.textContent = 'Toggle Light Theme';
  }
}

if (themeToggleDrumKit) {
  themeToggleDrumKit.addEventListener('click', () => {
    bodyDrumKit.classList.toggle('light-mode');
    if (bodyDrumKit.classList.contains('light-mode')) {
      localStorage.setItem(drumKitThemeStatusKey, 'light');
      themeToggleDrumKit.textContent = 'Toggle Dark Theme';
    } else {
      localStorage.setItem(drumKitThemeStatusKey, 'dark'); // Or removeItem
      themeToggleDrumKit.textContent = 'Toggle Light Theme';
    }
  });
}

// Apply theme on initial load
document.addEventListener('DOMContentLoaded', applyDrumKitTheme);

// Original Drum Kit Logic
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
