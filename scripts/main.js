const navbarMenu = document.querySelector(".navbar-menu");
const toggleButton = document.querySelector(".navbar-burger");

const toggleMenu = () => {
  navbarMenu.classList.toggle("is-active");
};

toggleButton.addEventListener("click", () => toggleMenu());
