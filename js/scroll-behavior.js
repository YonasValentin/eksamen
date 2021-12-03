$(document).ready(function () {
  $.scrollify({
    section: "section",
    scrollSpeed: 1100,
  });
});

let omOs = document.getElementById("nav-om-os");
let section = document.getElementById("section-om-os");

omOs.addEventListener("click", function () {
  section.scrollIntoView(true, { behavior: "smooth" });
});
