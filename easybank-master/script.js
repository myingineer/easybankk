const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const sideBar = document.querySelector(".side-bar");
const container = document.querySelector(".nxt");
const pic = document.querySelector(".img2");

openButton.addEventListener("click", () => {
  sideBar.style.display = "flex";
  container.style.opacity = "3%";
  pic.style.opacity = "30%";
});
closeButton.addEventListener("click", () => {
  sideBar.style.display = "none";
  container.style.opacity = "100%";
  pic.style.opacity = "100%";
});