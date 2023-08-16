const burgerIcon = document.getElementById('burger');
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownItems = document.querySelectorAll('.dropdown-item');

burgerIcon.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
});

dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    dropdownMenu.classList.remove('active');
  });
});

// typewriter effect 

let text = " I'm a 22 year-old tech enthusiast studying English at the University of 8 May 1945 in Guelma. I'm passionate about programming and I enjoy building user-friendly solutions & building projects. Let's create something amazing together!";
const typingSpeed = 75; // typing speed in milliseconds
const delayAfterTyping = 20000; // Delay after text is fully typed in milliseconds

const typewriterElement = document.getElementById("typewriter-text");

function typeWriter() {
  if (text.length > 0) {
    typewriterElement.innerHTML += text.charAt(0);
    text = text.substring(1);
    setTimeout(typeWriter, typingSpeed);
  } else {
    setTimeout(() => {
      typewriterElement.innerHTML = ""; // Clear the text
      text = " I'm a 22 year-old tech enthusiast studying English at the University of 8 May 1945 in Guelma. I'm passionate about programming and I enjoy building user-friendly solutions & building projects. Let's create something amazing together!"; // Reset the text
      typeWriter();
    }, delayAfterTyping);
  }
}

typeWriter();



// for the img slide
// script.js
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0; // Hide all images
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.opacity = 1; // Show current image
  setTimeout(showSlides, 6000); // Change slide every 3 seconds
}

