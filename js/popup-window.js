const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');
const b4 = document.querySelector('.b4');
const b5 = document.querySelector('.b5');
const b6 = document.querySelector('.b6');

const bclose1 = document.querySelector('#close1');
/* const x = document.querySelector(.) */
const placetoAdd = document.querySelector('.popup__insert');
const acTivate1 = document.querySelector('.popup__insert');


const detailsProjects = [
  {
  img:'',
  name:'lol',
  tech:['html', 'css', 'javascript','hey'],
  info:'1',
},

{
  img:'',
  name:'',
  tech:'',
  info:'2',
},

{
  img:'',
  name:'',
  tech:'',
  info:'3',
},

{
  img:'',
  name:'',
  tech:'',
  info:'4',
},

{
  img:'',
  name:'',
  tech:'',
  info:'5',
},

{
  img:'',
  name:'',
  tech:'',
  info:'6',
},

];

function addContent (n) {
  const {
    img,
    name,
    tech,
    info,
  } = detailsProjects[n];


placetoAdd.insertAdjacentHTML('afterbegin', `

<div id="elerem" class="popup__window active">
<div class="img">
<img src="${img}" alt="">
<button id="close1" type="button" onclick="removeFunction()">
  <span><img src="./Offline-Icons/cross.svg" alt="cross"></span></button>
</div>
<h3>${name}</h3>
  <ul>
    <li>
      ${tech[0]}
    </li>
    <li>
      ${tech[1]}
    </li>
    <li>
      ${tech[2]}
    </li>
    <li>
      ${tech[3]}
    </li>
  </ul>
  <p>${info}</p>
  <div class="popup__buttons">
    <button class="popup__button1">1</button>
    <button class="popup__button1">2</button>
  </div>
</div>
`);

acTivate1.classList.add('active');

}

function removeFunction(){
  const removeContent = document.getElementById('elerem');
  removeContent.remove();
  acTivate1.classList.remove('active');
}


b1.addEventListener('click', () => {
  addContent(0);
});

/* b2.addEventListener('click', () => {
  removeFunction();

}) */


