// Обьявляем переменные
const sliders = Array.from(document.querySelectorAll(".slider__item")),
prev = document.querySelector(".slider__arrow_prev"),
next = document.querySelector(".slider__arrow_next"),
sliderItemActive = document.querySelector(".slider__item_active");
// Выставляем активный слайд
let slideActive = 0;
//console.log(sliders);
//console.log(sliderItemActive);


//console.log(index);
prev.onclick = () => {
  slideActive - 1 < 0 ? (slideActive = sliders.length - 1) : (slideActive -= 1);
  index(slideActive);
}

next.onclick = () => {
  slideActive - 1 < 0 ? (slideActive = sliders.length - 1) : (slideActive -= 1);
  index(slideActive);
}

function index(i) {
  [...sliders].findIndex((item) => item.classList.remove("slider__item_active"));
  const slid = Array.from(document.querySelectorAll(".slider__item"));
  slid[i].classList.add("slider__item_active");
}

/*
// Назначаем действие по клику
prev.onclick = () => {
  if (slideActive - 1 < 0) {
    slideActive = sliders.length - 1;
} else {
    slideActive -= 1;
}
  changeSlide(slideActive);// делаем вызов функции changeSlide(i)
};

next.onclick = () => {
  if (slideActive - 1 < 0) {
    slideActive = sliders.length - 1;
} else {
    slideActive -= 1;
}
  changeSlide(slideActive);// делаем вызов функции changeSlide(i)
};

function changeSlide(i) {
  [...sliders].forEach((item) => item.classList.remove("slider__item_active"));
  const slid = Array.from(document.querySelectorAll(".slider__item"));
  slid[i].classList.add("slider__item_active");
}
*/
