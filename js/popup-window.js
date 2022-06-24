const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');
const b4 = document.querySelector('.b4');
const b5 = document.querySelector('.b5');
const b6 = document.querySelector('.b6');
const body = document.querySelector('.popup-window');
const bclose1 = document.querySelector('#close1');
const placetoAdd = document.querySelector('.popup__insert');
const acTivate1 = document.querySelector('.popup__insert');


function addContent (n) {
  

  if (window.innerWidth < 768){

    const detailsProjects = [
      {
      img:'./img/popup-img/Snapshoot_Portfolio .png',
      name:'Keeping track of hundreds of components',
      tech:['Ruby on rails', 'css', 'javascript'],
      info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    },
    
    {
      img:'./img/popup-img/Snapshoot_Portfolio .png',
      name:'Keeping track of hundreds of components',
      tech:['Ruby on rails', 'css', 'javascript'],
      info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    },
    
    {
      img:'./img/popup-img/Snapshoot_Portfolio .png',
      name:'Keeping track of hundreds of components',
      tech:['Ruby on rails', 'css', 'javascript'],
      info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    },
    
    {
      img:'./img/popup-img/Snapshoot_Portfolio .png',
      name:'Keeping track of hundreds of components',
      tech:['Ruby on rails', 'css', 'javascript'],
      info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    },
    
    {
      img:'./img/popup-img/Snapshoot_Portfolio .png',
      name:'Keeping track of hundreds of components',
      tech:['Ruby on rails', 'css', 'javascript'],
      info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    },
    
    {
      img:'./img/popup-img/Snapshoot_Portfolio .png',
      name:'Keeping track of hundreds of components',
      tech:['Ruby on rails', 'css', 'javascript'],
      info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    },
    
    ];
    

    const {
      img,
      name,
      tech,
      info,
    } = detailsProjects[n];


placetoAdd.insertAdjacentHTML('afterbegin', `

<div id="elerem" class="popup__window active">
<div class="img__card ">
<button id="close1" class="xmenu display" type="button" onclick="removeFunction()">
<span class="material-symbols-outlined">
close
</span>
</button>
<img class="popimg" src="${img}" alt="">
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
  </ul>
  <p>${info}</p>
  <div class="popup__buttons">
    <button class="popup__button1">See Live<img src="/Offline-Icons/b1.svg" alt=""></button>
    <button class="popup__button1">See Source<img src="/Offline-Icons/b2.svg" alt=""></button>
  </div>
</div>
`);

acTivate1.classList.add('active');
body.classList.add('popup-show')
}

if(window.innerWidth > 768){

  const detailsProjects = [
    {
    img:'./img/popup-img/Snapshoot Portfolio.png',
    name:'Keeping track of hundreds of components',
    tech:['Ruby on rails', 'css', 'javascript'],
    info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  
  {
    img:'./img/popup-img/Snapshoot Portfolio.png',
    name:'Keeping track of hundreds of components',
    tech:['Ruby on rails', 'css', 'javascript'],
    info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  
  {
    img:'./img/popup-img/Snapshoot Portfolio.png',
    name:'Keeping track of hundreds of components',
    tech:['Ruby on rails', 'css', 'javascript'],
    info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  
  {
    img:'./img/popup-img/Snapshoot Portfolio.png',
    name:'Keeping track of hundreds of components',
    tech:['Ruby on rails', 'css', 'javascript'],
    info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  
  {
    img:'./img/popup-img/Snapshoot Portfolio.png',
    name:'Keeping track of hundreds of components',
    tech:['Ruby on rails', 'css', 'javascript'],
    info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  
  {
    img:'./img/popup-img/Snapshoot Portfolio.png',
    name:'Keeping track of hundreds of components',
    tech:['Ruby on rails', 'css', 'javascript'],
    info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  
  ];
  

  const {
    img,
    name,
    tech,
    info,
  } = detailsProjects[n];


  placetoAdd.insertAdjacentHTML('afterbegin', `

<div id="elerem" class="popup__window active">
<div class="img__card ">
<button id="close1" class="xmenu display" type="button" onclick="removeFunction()">
<span class="material-symbols-outlined">
close
</span>
</button>
<img class="popimg" src="${img}" alt="">
</div>
<div class="hb">
<h3>${name}</h3>
<div class="popup__buttons">
    <button class="popup__button1">See Live<img src="/Offline-Icons/b1.svg" alt=""></button>
    <button class="popup__button1 popup__button2">See Source<img src="/Offline-Icons/b2.svg" alt=""></button>
  </div>
</div>
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
  </ul>
  <p>${info}</p>
  
</div>
`);

acTivate1.classList.add('active');
body.classList.add('popup-show')
}
};

function removeFunction(){
  const removeContent = document.getElementById('elerem');
  removeContent.remove();
  acTivate1.classList.remove('active');
  body.classList.remove ('popup-show')
}

b1.addEventListener('click', () => {
  addContent(0);
});

b2.addEventListener('click', () => {
  addContent(1);
});

b3.addEventListener('click', () => {
  addContent(2);
});

b4.addEventListener('click', () => {
  addContent(3);
});

b5.addEventListener('click', () => {
  addContent(4);
});

b6.addEventListener('click', () => {
  addContent(5);
});
