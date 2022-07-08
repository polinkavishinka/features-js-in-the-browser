// Обьявляем переменные
const sliders = document.querySelectorAll(".slider__item"),
prev = document.querySelector(".slider__arrow_prev"),
next = document.querySelector(".slider__arrow_next");
// Выставляем активный слайд
let slideActive = 0;
console.log(sliders.length);
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
  sliders[i].classList.add("slider__item_active");
}

