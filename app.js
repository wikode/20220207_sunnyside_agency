const menuBtn = document.getElementById("mobile-menu");
const mobileNav = document.getElementsByClassName("nav-links")[0];
const navLinks = [...document.getElementsByClassName("nav-link")];

const toggleNav = () => {
  mobileNav.classList.toggle("active");
};

menuBtn.addEventListener("click", toggleNav);

navLinks.forEach((nav) =>
  nav.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleNav();
  })
);
