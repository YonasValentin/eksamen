// array of projekt 1
let projekt1Array = [
  {
    title: "Mark",
    quote: "Incididunt nostrud et minim in excepteur culpa anim.",
    image:
      "https://images.pexels.com/photos/9824669/pexels-photo-9824669.jpeg?cs=srgb&dl=pexels-nikita-nikitin-9824669.jpg&fm=jpg",
  },
  {
    title: "Rikke",
    quote:
      "Duis ea sint cillum qui eiusmod fugiat mollit voluptate cupidatat incididunt nulla nostrud.",
    image:
      "https://images.pexels.com/photos/9042872/pexels-photo-9042872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    title: "Morten",
    quote:
      "Consectetur eiusmod laborum veniam dolore consequat mollit exercitation officia exercitation ex laboris enim.",
    image:
      "https://images.pexels.com/photos/10166802/pexels-photo-10166802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

let projekt1PrevBtn = document.getElementById("section-projekt-1__prev-btn");
let projekt1NextBtn = document.getElementById("section-projekt-1__next-btn");

let projekt1Img = document.getElementById("section-projekt-1__img");
let projekt1Title = document.getElementById("section-projekt-1__info-title");
let projekt1Quote = document.getElementById("section-projekt-1__info-quote");
// defindes the data-index to start
let i = 0;
let items = projekt1Array[i];

projekt1Img.src = projekt1Array[i].image;
projekt1Title.innerText = projekt1Array[i].title;
projekt1Quote.innerText = projekt1Array[i].quote;

projekt1Img.style.width = "100px";

projekt1PrevBtn.addEventListener("click", function () {
  i--;
  if (i < projekt1Array.length - 1) {
    i = 0;
  }
  projekt1Img.src = projekt1Array[i].image;
  projekt1Title.innerText = projekt1Array[i].title;
  projekt1Quote.innerText = projekt1Array[i].quote;
});

projekt1NextBtn.addEventListener("click", function () {
  i++;
  if (i > projekt1Array.length + 1) {
    i = 0;
  }
  projekt1Img.src = projekt1Array[i].image;
  projekt1Title.innerText = projekt1Array[i].title;
  projekt1Quote.innerText = projekt1Array[i].quote;
});
