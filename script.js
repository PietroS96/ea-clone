let leftMenu = document.getElementById("show-menu");
let circleBtn = document.getElementById("circle-btn");
let menuCloser = document.getElementById("menu-closer");
let menu = "close";
function aside() {
  if (menu == "close") {
    leftMenu.style.left = 0;
    menu = "open";
  } else {
    leftMenu.style.left = "-500px";
    menu = "close";
  }
}

circleBtn.addEventListener("click", () => {
  aside();
});

menuCloser.addEventListener("click", () => {
  aside();
});

function showMenu() {
  document.getElementById("panel-active").classList.toggle("panel-hide");
}
