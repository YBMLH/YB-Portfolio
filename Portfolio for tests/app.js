


const burgerIcon = document.getElementById('burger');
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownItems = document.querySelectorAll('.dropdown-item'); // Make sure the class matches your HTML

burgerIcon.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
});

dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    dropdownMenu.classList.remove('active');
  });
});
