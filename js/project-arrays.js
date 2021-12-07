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

projekt1Img.src = projekt1Array[i].image;
projekt1Title.innerText = projekt1Array[i].title;
projekt1Quote.innerText = projekt1Array[i].quote;

projekt1PrevBtn.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = projekt1Array.length - 1;
  }
  projekt1Img.src = projekt1Array[i].image;
  projekt1Title.innerText = projekt1Array[i].title;
  projekt1Quote.innerText = projekt1Array[i].quote;
});

projekt1NextBtn.addEventListener("click", function () {
  i++;
  if (projekt1Array.length < i + 1) {
    i = 0;
  }
  projekt1Img.src = projekt1Array[i].image;
  projekt1Title.innerText = projekt1Array[i].title;
  projekt1Quote.innerText = projekt1Array[i].quote;
});

// array of projekt 2

let projekt2Array = [
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

let projekt2PrevBtn = document.getElementById("section-projekt-2__prev-btn");
let projekt2NextBtn = document.getElementById("section-projekt-2__next-btn");

let projekt2Img = document.getElementById("section-projekt-2__img");
let projekt2Title = document.getElementById("section-projekt-2__info-title");
let projekt2Quote = document.getElementById("section-projekt-2__info-quote");

projekt2Img.src = projekt2Array[i].image;
projekt2Title.innerText = projekt2Array[i].title;
projekt2Quote.innerText = projekt2Array[i].quote;

projekt2Img.style.width = "100px";

projekt2PrevBtn.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = projekt2Array.length - 1;
  }
  projekt2Img.src = projekt2Array[i].image;
  projekt2Title.innerText = projekt2Array[i].title;
  projekt2Quote.innerText = projekt2Array[i].quote;
});

projekt2NextBtn.addEventListener("click", function () {
  i++;
  if (projekt2Array.length < i + 1) {
    i = 0;
  }
  projekt2Img.src = projekt2Array[i].image;
  projekt2Title.innerText = projekt2Array[i].title;
  projekt2Quote.innerText = projekt2Array[i].quote;
});

// array of projekt 3

let projekt3Array = [
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

let projekt3PrevBtn = document.getElementById("section-projekt-3__prev-btn");
let projekt3NextBtn = document.getElementById("section-projekt-3__next-btn");

let projekt3Img = document.getElementById("section-projekt-3__img");
let projekt3Title = document.getElementById("section-projekt-3__info-title");
let projekt3Quote = document.getElementById("section-projekt-3__info-quote");

projekt3Img.src = projekt3Array[i].image;
projekt3Title.innerText = projekt3Array[i].title;
projekt3Quote.innerText = projekt3Array[i].quote;

projekt3Img.style.width = "100px";

projekt3PrevBtn.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = projekt3Array.length - 1;
  }
  projekt3Img.src = projekt3Array[i].image;
  projekt3Title.innerText = projekt3Array[i].title;
  projekt3Quote.innerText = projekt3Array[i].quote;
});

projekt3NextBtn.addEventListener("click", function () {
  i++;
  if (projekt3Array.length < i + 1) {
    i = 0;
  }
  projekt3Img.src = projekt3Array[i].image;
  projekt3Title.innerText = projekt3Array[i].title;
  projekt3Quote.innerText = projekt3Array[i].quote;
});
