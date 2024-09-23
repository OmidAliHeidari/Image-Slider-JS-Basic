var models = [
  {
    name: "Bmw 418d",
    image: "img/bmw.jpg",
  },
  {
    name: "Mazda CX-3",
    image: "img/mazda.jpg",
  },
  {
    name: "Volvo S60",
    image: "img/volvo.jpg",
  },
  {
    name: "Skoda Superb",
    image: "img/skoda.jpg",
  },
  {
    name: "Honca Civic",
    image: "img/honda.jpg",
  },
];

var index = 0;
var slaytCount = models.length;
function showSlide(i) {
  index = i;
  if (0 > i) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
  }
  document.querySelector(".card-title").textContent = models[index].name;
  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);
}
document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
    console.log(index);
  });
document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);
  });
