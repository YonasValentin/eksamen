// find pop-up block in HTML
const popUp = document.getElementById("");

// find btn to open block element
const popUpBtn = document.getElementById("");

// find btn to close block element
const popUpClose = document.getElementById("");

// show block, when click on popUpBtn
popUpBtn.addEventListener("click", function () {
  popUp.style.display.block;
});

// close block, when click on popUpClose
popUpClose.addEventListener("click", function () {
  popUp.style.display.none;
});

// close block, when click outside of the block
window.addEventListener("click", function (e) {
  if (e.target == popUp) {
    popUp.style.display.none;
  }
});
