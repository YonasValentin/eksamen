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
navTop.addEventListener("click", function () {
  const heroSection = document.getElementById("section-book-moede");
  heroSection.scrollIntoView({ behavior: "smooth" });
});

const navArtikler = document.getElementById("nav-artikler");
navArtikler.addEventListener("click", function () {
  const artiklerSection = document.getElementById("section-artikler");
  artiklerSection.scrollIntoView({ behavior: "smooth" });
});
