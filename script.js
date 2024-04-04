//--------------------------------Menu-Item-->
const toP = document.querySelector(".top");
window.addEventListener("scroll", function () {
  const X = this.pageYOffset;
  if (X > 1) {
    toP.classList.add("active");
  } else {
    toP.classList.remove("active");
  }
});

//-------------------------------Menu-Slidebar------------------------>
const itemsliderbar = document.querySelectorAll(".cartegory-left-li.block");
itemsliderbar.forEach(function (menu, index) {
  menu.addEventListener("click", function () {
    menu.classList.toggle("");
  });
});
