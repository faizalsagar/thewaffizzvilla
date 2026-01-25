const menuIcon = document.querySelector(".menuIcon");
const navLinks = document.querySelector(".navLinks");
const a = document.querySelector(".navA")

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuIcon.classList.add("hidden");
});


const image = document.getElementById("seconImg");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const heroTop = hero.offsetTop;
  const scrollY = window.scrollY;

  if (scrollY >= heroTop) {
    image.style.transform = `rotate(${-(scrollY - heroTop) * 0.1}deg)`;
  }
});
