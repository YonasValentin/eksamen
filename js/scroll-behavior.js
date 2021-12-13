// smooth scroll behavior on scroll
$(document).ready(function () {
  $.scrollify({
    section: "section",
    scrollSpeed: 1100,
  });
});

// click on logo -> scrool to hero section
const navTop = document.getElementById("nav-top");
navTop.addEventListener("click", function () {
  const heroSection = document.getElementById("section-hero");
  heroSection.scrollIntoView({ behavior: "smooth" });
});

// click on hero arrow -> scrool to section projekt 1
const heroArrowDown = document.querySelector(".section-hero__arrow");
heroArrowDown.addEventListener("click", function () {
  const projekt1Section = document.querySelector(".section-projekt-1");
  projekt1Section.scrollIntoView({ behavior: "smooth" });
});

const projekt1ArrowDown = document.querySelector(".section-projekt-1__arrow");
projekt1ArrowDown.addEventListener("click", function () {
  const projekt2Section = document.querySelector(".section-projekt-2");
  projekt2Section.scrollIntoView({ behavior: "smooth" });
});
const projekt2ArrowDown = document.querySelector(".section-projekt-2__arrow");
projekt2ArrowDown.addEventListener("click", function () {
  const project3Section = document.querySelector(".section-projekt-3");
  project3Section.scrollIntoView({ behavior: "smooth" });
});

const projekt3ArrowDown = document.querySelector(".section-projekt-3__arrow");
projekt3ArrowDown.addEventListener("click", function () {
  const project4Section = document.querySelector(".section-projekt-4");
  project4Section.scrollIntoView({ behavior: "smooth" });
});

const projekt4ArrowDown = document.querySelector(".section-projekt-4__arrow");
projekt4ArrowDown.addEventListener("click", function () {
  const projektOmOsSection = document.getElementById("section-om-os");
  projektOmOsSection.scrollIntoView({ behavior: "smooth" });
});

// click on projekter -> scrool to projekter section
const navProjekter = document.getElementById("nav-projekter");
navProjekter.addEventListener("click", function () {
  const projekterSection = document.getElementById("section-projekter");
  projekterSection.scrollIntoView({ behavior: "smooth" });
});

// click on om os -> scrool to om os section
const navOmOs = document.getElementById("nav-om-os");
navOmOs.addEventListener("click", function () {
  const omOsSection = document.getElementById("section-om-os");
  omOsSection.scrollIntoView({ behavior: "smooth" });
});

// click on reparationer -> scrool to reparationer section
const navReparationer = document.getElementById("nav-reparationer");
navReparationer.addEventListener("click", function () {
  const repurationerSection = document.getElementById("section-reparationer");
  repurationerSection.scrollIntoView({ behavior: "smooth" });
});

// click on anmeldelser -> scrool to anmeldelser section
const navBoBedre = document.getElementById("nav-anmeldelser");
navBoBedre.addEventListener("click", function () {
  const boBedreSection = document.getElementById("section-reviews");
  boBedreSection.scrollIntoView({ behavior: "smooth" });
});

// click on book møde -> scrool to book møde section
const navBookMoede = document.getElementById("nav-book-moede");
navBookMoede.addEventListener("click", function () {
  const bookMoedeSection = document.getElementById("section-book-moede");
  bookMoedeSection.scrollIntoView({ behavior: "smooth" });
});

const navArtikler = document.getElementById("nav-artikler");
navArtikler.addEventListener("click", function () {
  const artiklerSection = document.getElementById("section-artikler");
  artiklerSection.scrollIntoView({ behavior: "smooth" });
});
