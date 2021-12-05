const popUp = document.getElementById("");

const popUpBtn = document.getElementById("");

const popUpClose = document.getElementById("");

popUpBtn.addEventListener("click", function () {
  popUp.style.display.block;
});

popUpClose.addEventListener("click", function () {
  popUp.style.display.none;
});

window.addEventListener("click", function (e) {
  if (e.target == popUp) {
    popUp.style.display.none;
  }
});
