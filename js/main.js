const lBars1 = document.querySelector('.line1__bars-menu');
const lBars2 = document.querySelector('.line2__bars-menu');
const lBars3 = document.querySelector('.line3__bars-menu');
const listBars = document.querySelector('.list_bar-menu');

document.querySelector('#bmenu').addEventListener('click', () => {
  lBars1.classList.toggle('activeline1__bars-menu');
  lBars2.classList.toggle('activeline2__bars-menu');
  lBars3.classList.toggle('activeline3__bars-menu');
  listBars.toggle('deploy');
});
document.querySelector('.a0').addEventListener('click', () => {
  lBars1.classList.toggle('activeline1__bars-menu');
  lBars2.classList.toggle('activeline2__bars-menu');
  lBars3.classList.toggle('activeline3__bars-menu');
  listBars.toggle('deploy');
});

document.querySelector('.a1').addEventListener("click", () => {
  lBars1.classList.toggle('activeline1__bars-menu');
  lBars2.classList.toggle('activeline2__bars-menu');
  lBars3.classList.toggle('activeline3__bars-menu');
  listBars.toggle('deploy');
});
document.querySelector('.a2').addEventListener("click", () => {
  lBars1.classList.toggle('activeline1__bars-menu');
  lBars2.classList.toggle('activeline2__bars-menu');
  lBars3.classList.toggle('activeline3__bars-menu');
  listBars.toggle('deploy');
});
