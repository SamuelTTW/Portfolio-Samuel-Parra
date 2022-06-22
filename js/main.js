const listBars = document.querySelector('.list_bar-menu');
const bMenu = document.querySelector('#bmenu');
const xMenu = document.querySelector('.xmenu');
const mHeader = document.querySelector('.Mheader');
const pop = document.querySelector('.popup-window');

function Hamburger() {
  listBars.classList.toggle('deploy');
  bMenu.classList.toggle('none');
  xMenu.classList.toggle('display');
  mHeader.classList.toggle('none');
  pop.classList.toggle('popup-show');
}
document.querySelector('#bmenu').addEventListener('click', Hamburger);
document.querySelector('.xmenu').addEventListener('click', Hamburger);
document.querySelector('.a0').addEventListener('click', Hamburger);
document.querySelector('.a1').addEventListener('click', Hamburger);
document.querySelector('.a2').addEventListener('click', Hamburger );
