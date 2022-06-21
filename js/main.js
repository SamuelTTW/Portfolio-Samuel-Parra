const line1__Bars = document.querySelector('.line1__bars-menu');
const line2__Bars = document.querySelector('.line2__bars-menu');
const line3__Bars = document.querySelector('.line3__bars-menu');
const list__Bars = document.querySelector('.list_bar-menu');

document.querySelector('#bmenu').addEventListener('click', () => {
  line1__Bars.classList.toggle('activeline1__bars-menu');
  line2__Bars.classList.toggle('activeline2__bars-menu');
  line3__Bars.classList.toggle('activeline3__bars-menu');
  list__Bars.classList.toggle('deploy');
});
document.querySelector('.a0').addEventListener('click', () => {
  line1__Bars.classList.toggle('activeline1__bars-menu');
  line2__Bars.classList.toggle('activeline2__bars-menu');
  line3__Bars.classList.toggle('activeline3__bars-menu');
  list__Bars.classList.toggle('deploy');
});