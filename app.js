//Задание 1
// Описать в html тег input и тег ul.
// По нажатию на клавишу в инпуте в список ul должен добавляться элемент li.
// Содержимое li - нажатая клавиша.

// const input = document.querySelector("input");
// const list = document.querySelector("ul");
// input.addEventListener("keyup", function (event) {
//   const pressButton = event.key;
//   const newLi = document.createElement("li");
//   newLi.innerText = pressButton;
//   list.appendChild(newLi);
// });

// Задание 2
// Вставить в html тег input (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз,
// как только клиент вписывает любой символ в поле (или стирает любой символ из поля).
// Вам понадобится считывать значение поля, это input.value

// const input = document.querySelector("input");
// input.addEventListener("keyup", function () {
//   console.log(input.value);
// });

// Задание 3
// Создать в html форму с инпутом и кнопкой.
// Также добавить в html тег ul.
// Когда форма отправляется, добавлять в список тег li.
// Его содержимое - введенный текст (input.value).
// После отправки формы инпут должен быть очищен (проставить пустую строку в value).

// const input = document.querySelector("input");
// const button = document.querySelector("button");
// const list = document.querySelector("ul");
// button.addEventListener("click", function (event) {
//   event.preventDefault();
//   const newLi = document.createElement("li");
//   newLi.innerText = input.value;
//   list.appendChild(newLi);
//   input.value = "";
// });

// Задание 4
// Калькулятор.
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой.
// Добавить в html div. Внутри select будут options - арифметические знаки.
// В оба инпута пользователь вводит число.
// Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select
// (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value).
// Результат отображается в div.
// 1) решить с помощью if
// 2) решить с помощью evel (https://developer.mozilla.org/...)

// const input1 = document.getElementById("input1");
// const input2 = document.getElementById("input2");
// const button = document.querySelector("button");
// const select = document.querySelector("select");
// const form = document.querySelector("form");
// const div = document.querySelector("div");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const input1 = form.querySelector("#input1");
//   const input2 = form.querySelector("#input2");
//   const select = form.querySelector("select");
//   console.log(select.value);
//   if (select.value === "*") {
//     div.innerText = input1.value * input2.value;
//   } else if (select.value === "/") {
//     div.innerText = input1.value / input2.value;
//   } else if (select.value === "+") {
//     div.innerText = input1.value + input2.value;
//   } else if (select.value === "-") {
//     div.innerText = input1.value - input2.value;
//   }
// });

// Задание 5
// Вставить в разметку html тег button без js (просто предусмотреть в разметке).
// При наведении на кнопку изменять ее цвет каждый раз рандомным цветом.
// При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов.
// Использовать обработку событий mouseenter, mouseleave на этой кнопке.

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function getRandomAngle() {
  return Math.floor(Math.random() * 361) - 180;
}
const button = document.getElementById("randomButton");
button.addEventListener("mouseenter", function () {
  button.style.backgroundColor = getRandomColor();
});
button.addEventListener("mouseleave", function () {
  const randomAngle = getRandomAngle();
  button.style.transform = `rotate(${randomAngle}deg)`;
});
