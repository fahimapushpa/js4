const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sideMenu = document.getElementById("side-menu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  sideMenu.style.left = "0";
  overlay.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.left = "-250px";
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  sideMenu.style.left = "-250px";
  overlay.style.display = "none";
});
