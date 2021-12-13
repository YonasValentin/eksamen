// array of projekt 1
let projekt1Array = [
  {
    title: "Walk in closet",
    quote:
      "Mark fik specialdesignet et lille walk in closet, hvilket har været et af hans størte ønsker at få bygget til hans lækre lejlighed.",
    image: "http://yonasvalentin.com/eksamen/billeder-optimeret/IMG_0361.png",
    altText: "Billede af Mark, som har fået lavet et lille walk in closet",
  },
  {
    title: "Luksus walk in closet",
    quote:
      "Dette lille walk in closet er bygget i bambus, hvilket både er bæredygtigt og kan holde i mange år.",
    image: "http://yonasvalentin.com/eksamen/billeder-optimeret/IMG_0364.png",
    altText: "Luksus walk in closet",
  },
  {
    title: "Indretning af walk in closet",
    quote:
      "Max rådgav Mark med indretning af hans walk in closet, hvilket Mark fandt enormt prisværdigt.",
    image: "http://yonasvalentin.com/eksamen/billeder-optimeret/IMG_0380.png",
    altText: "Indretning af walk in closet",
  },
  {
    title: "Walk in closet inspiration",
    quote:
      "Max gav Mark en række idéer til inspiration af hans walk in closet.",
    image: "http://yonasvalentin.com/eksamen/billeder-optimeret/IMG_0396.png",
    altText: "Walk in closet inspiration",
  },
  {
    title: "Hylder på mål",
    quote:
      "Mark fik lavet disse lækre hylder på mål, så skabet blev helt som Mark gerne ville have det.",
    image: "http://yonasvalentin.com/eksamen/billeder-optimeret/IMG_0392.png",
    altText: "Hylder på mål",
  },
  {
    title: "Gammel dør",
    quote:
      "Max gav nyt liv til en ellers gammel dør, som mange ellers ville have kasseret",
    image: "http://yonasvalentin.com/eksamen/billeder-optimeret/IMG_0383.png",
    altText: "Gammel dør",
  },
  {
    title: "Maling af døre",
    quote: "Max køber udelukkende kvalitetsmalig til maling af døre.",
    image: "http://yonasvalentin.com/eksamen/billeder-optimeret/IMG_0384.png",
    altText: "Maling af døre",
  },
  {
    title: "Bænk med opbevaring",
    quote:
      "Mark fik udover sit lille walk in closet lavet en smart bænk med opbevaring.",
    image: "http://yonasvalentin.com/eksamen/billeder-optimeret/IMG_0407.png",
    altText: "Bænk med opbevaring",
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
projekt1Img.alt = projekt1Array[i].altText;
projekt1Title.innerText = projekt1Array[i].title;
projekt1Quote.innerText = projekt1Array[i].quote;

projekt1PrevBtn.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = projekt1Array.length - 1;
  }
  projekt1Img.src = projekt1Array[i].image;
  projekt1Img.alt = projekt1Array[i].altText;
  projekt1Title.innerText = projekt1Array[i].title;
  projekt1Quote.innerText = projekt1Array[i].quote;
});

projekt1NextBtn.addEventListener("click", function () {
  i++;
  if (projekt1Array.length < i + 1) {
    i = 0;
  }
  projekt1Img.src = projekt1Array[i].image;
  projekt1Img.alt = projekt1Array[i].altText;
  projekt1Title.innerText = projekt1Array[i].title;
  projekt1Quote.innerText = projekt1Array[i].quote;
});

// array of projekt 2

let projekt2Array = [
  {
    title: "Mark",
    quote: "Incididunt nostrud et minim in excepteur culpa anim.",
    image:
      "http://yonasvalentin.com/eksamen/billeder-optimeret/266043773_324696899267638_2969925741656817733_n.png",
    altText: "",
  },
  {
    title: "Rikke",
    quote:
      "Duis ea sint cillum qui eiusmod fugiat mollit voluptate cupidatat incididunt nulla nostrud.",
    image: "http://yonasvalentin.com/eksamen/billeder-optimeret/IMG_0332.png",
    altText: "",
  },
  {
    title: "Morten",
    quote:
      "Consectetur eiusmod laborum veniam dolore consequat mollit exercitation officia exercitation ex laboris enim.",
    image: "http://yonasvalentin.com/eksamen/billeder-optimeret/IMG_0334.png",
    altText: "",
  },
  {
    title: "Morten",
    quote:
      "Consectetur eiusmod laborum veniam dolore consequat mollit exercitation officia exercitation ex laboris enim.",
    image: "http://yonasvalentin.com/eksamen/billeder-optimeret/IMG_0335.png",
    altText: "",
  },
  {
    title: "Morten",
    quote:
      "Consectetur eiusmod laborum veniam dolore consequat mollit exercitation officia exercitation ex laboris enim.",
    image: "http://yonasvalentin.com/eksamen/billeder-optimeret/IMG_0339.png",
    altText: "",
  },
  {
    title: "Morten",
    quote:
      "Consectetur eiusmod laborum veniam dolore consequat mollit exercitation officia exercitation ex laboris enim.",
    image: "http://yonasvalentin.com/eksamen/billeder-optimeret/IMG_0338.png",
    altText: "",
  },
];

let projekt2PrevBtn = document.getElementById("section-projekt-2__prev-btn");
let projekt2NextBtn = document.getElementById("section-projekt-2__next-btn");

let projekt2Img = document.getElementById("section-projekt-2__img");
let projekt2Title = document.getElementById("section-projekt-2__info-title");
let projekt2Quote = document.getElementById("section-projekt-2__info-quote");

projekt2Img.src = projekt2Array[i].image;
projekt2Img.alt = projekt1Array[i].altText;
projekt2Title.innerText = projekt2Array[i].title;
projekt2Quote.innerText = projekt2Array[i].quote;

projekt2PrevBtn.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = projekt2Array.length - 1;
  }
  projekt2Img.src = projekt2Array[i].image;
  projekt2Img.alt = projekt1Array[i].altText;
  projekt2Title.innerText = projekt2Array[i].title;
  projekt2Quote.innerText = projekt2Array[i].quote;
});

projekt2NextBtn.addEventListener("click", function () {
  i++;
  if (projekt2Array.length < i + 1) {
    i = 0;
  }
  projekt2Img.src = projekt2Array[i].image;
  projekt2Img.alt = projekt1Array[i].altText;
  projekt2Title.innerText = projekt2Array[i].title;
  projekt2Quote.innerText = projekt2Array[i].quote;
});

// array of projekt 3

let projekt3Array = [
  {
    title: "Mark",
    quote: "Incididunt nostrud et minim in excepteur culpa anim.",
    image: "http://yonasvalentin.com/eksamen/billeder-optimeret/IMG_0359.png",
    altText: "",
  },
  {
    title: "Rikke",
    quote:
      "Duis ea sint cillum qui eiusmod fugiat mollit voluptate cupidatat incididunt nulla nostrud.",
    image: "http://yonasvalentin.com/eksamen/billeder-optimeret/DSC04860.png",
    altText: "",
  },
  {
    title: "Morten",
    quote:
      "Consectetur eiusmod laborum veniam dolore consequat mollit exercitation officia exercitation ex laboris enim.",
    image: "http://yonasvalentin.com/eksamen/billeder-optimeret/DSC04863.png",
    altText: "",
  },
  {
    title: "Morten",
    quote:
      "Consectetur eiusmod laborum veniam dolore consequat mollit exercitation officia exercitation ex laboris enim.",
    image: "http://yonasvalentin.com/eksamen/billeder-optimeret/DSC04883.png",
    altText: "",
  },
];

let projekt3PrevBtn = document.getElementById("section-projekt-3__prev-btn");
let projekt3NextBtn = document.getElementById("section-projekt-3__next-btn");

let projekt3Img = document.getElementById("section-projekt-3__img");
let projekt3Title = document.getElementById("section-projekt-3__info-title");
let projekt3Quote = document.getElementById("section-projekt-3__info-quote");

projekt3Img.src = projekt3Array[i].image;
projekt3Img.alt = projekt1Array[i].altText;
projekt3Title.innerText = projekt3Array[i].title;
projekt3Quote.innerText = projekt3Array[i].quote;

projekt3PrevBtn.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = projekt3Array.length - 1;
  }
  projekt3Img.src = projekt3Array[i].image;
  projekt3Img.alt = projekt3Array[i].altText;
  projekt3Title.innerText = projekt3Array[i].title;
  projekt3Quote.innerText = projekt3Array[i].quote;
});

projekt3NextBtn.addEventListener("click", function () {
  i++;
  if (projekt3Array.length < i + 1) {
    i = 0;
  }
  projekt3Img.src = projekt3Array[i].image;
  projekt3Img.alt = projekt3Array[i].altText;
  projekt3Title.innerText = projekt3Array[i].title;
  projekt3Quote.innerText = projekt3Array[i].quote;
});

// array of øvrige projekter

let projekt4Array = [
  {
    title: "Mark",
    quote: "Incididunt nostrud et minim in excepteur culpa anim.",
    image: "http://yonasvalentin.com/eksamen/billeder-optimeret/DSC_0241.png",
    altText: "",
  },
  {
    title: "Rikke",
    quote:
      "Duis ea sint cillum qui eiusmod fugiat mollit voluptate cupidatat incididunt nulla nostrud.",
    image: "http://yonasvalentin.com/eksamen/billeder-optimeret/IMG_4368.png",
    altText: "",
  },
  {
    title: "Morten",
    quote:
      "Consectetur eiusmod laborum veniam dolore consequat mollit exercitation officia exercitation ex laboris enim.",
    image: "http://yonasvalentin.com/eksamen/billeder-optimeret/IMG_7588.png",
    altText: "",
  },
];

let projekt4PrevBtn = document.getElementById("section-projekt-4__prev-btn");
let projekt4NextBtn = document.getElementById("section-projekt-4__next-btn");

let projekt4Img = document.getElementById("section-projekt-4__img");
let projekt4Title = document.getElementById("section-projekt-4__info-title");
let projekt4Quote = document.getElementById("section-projekt-4__info-quote");

projekt4Img.src = projekt4Array[i].image;
projekt4Img.alt = projekt1Array[i].altText;
projekt4Title.innerText = projekt4Array[i].title;
projekt4Quote.innerText = projekt4Array[i].quote;

projekt4PrevBtn.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = projekt3Array.length - 1;
  }
  projekt4Img.src = projekt4Array[i].image;
  projekt4Img.alt = projekt1Array[i].altText;
  projekt4Title.innerText = projekt4Array[i].title;
  projekt4Quote.innerText = projekt4Array[i].quote;
});

projekt4NextBtn.addEventListener("click", function () {
  i++;
  if (projekt4Array.length < i + 1) {
    i = 0;
  }
  projekt4Img.src = projekt4Array[i].image;
  projekt4Img.alt = projekt1Array[i].altText;
  projekt4Title.innerText = projekt4Array[i].title;
  projekt4Quote.innerText = projekt4Array[i].quote;
});
