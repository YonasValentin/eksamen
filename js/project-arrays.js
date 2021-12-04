// array of projekt 1
const projekt1Array = [
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
];

// defindes the data-index to start
const i = 0;

function nextTitleQuoteImg() {
  i = i + 1;
  i = i % projekt1Array.length;
  i++;
  return projekt1Array[i];
}

function prevTitleQuoteImg() {
  i = i - 1;
  i = i % projekt1Array.length;
  i--;
  return projekt1Array[i];
}

const projekt1PrevBtn = document.getElementById("projekt-1__prev-button");
const projekt1NextBtn = document.getElementById("projekt-1__next-button");

projekt1NextBtn.addEventListener("click", function () {
  document.getElementById("projekt-1__img-container").innerHTML =
    projekt1Array[i].image;
  document.getElementById("projekt-1__title").innerText =
    projekt1Array[i].title;
  document.getElementById("projekt-1__quote").innerText =
    projekt1Array[i].quote;
});

projekt1PrevBtn.addEventListener("click", function () {
  document.getElementById("projekt-1__img-container").innerHTML =
    projekt1Array[i].image;
  document.getElementById("projekt-1__title").innerText =
    projekt1Array[i].title;
  document.getElementById("projekt-1__quote").innerText =
    projekt1Array[i].quote;
});
