const line1__bars = document.querySelector(".line1__bars-menu");
const line2__bars = document.querySelector(".line2__bars-menu");
const line3__bars = document.querySelector(".line3__bars-menu");
const list__bars = document.querySelector(".list_bar-menu");

document.querySelector('#bmenu').addEventListener("click", () => {
  line1__bars.classList.toggle('activeline1__bars-menu');
  line2__bars.classList.toggle('activeline2__bars-menu');
  line3__bars.classList.toggle('activeline3__bars-menu');
  list__bars.classList.toggle('deploy');
});
document.querySelector('.a0').addEventListener("click", () => {
  line1__bars.classList.toggle('activeline1__bars-menu');
  line2__bars.classList.toggle('activeline2__bars-menu');
  line3__bars.classList.toggle('activeline3__bars-menu');
  list__bars.classList.toggle('deploy');
});


