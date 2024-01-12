// Toggle class active
const navbarNav = document.querySelector(".navabr-nav");
// ketika menu di klik
document.querySelector("#menu").onclik = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const manu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
