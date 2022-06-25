const formulary = document.querySelector('#data');
const emailInput = document.querySelector('#emailfield');
const pemail = document.querySelector('.pemail');
const send = document.querySelector('.pbutton');
const Nosend = document.querySelector('.pbuttonNo');
const expre = {
  regexemail: /^[a-z0-9_.+-]+@[a-z0-9-]+\.[a-z0-9-.]+$/,
};

let lowercaseEmail = true;

const red = () => {
  if (expre.regexemail.test(emailInput.value)) {
    emailInput.classList.remove('field1');
    pemail.classList.remove('lowercase');
    lowercaseEmail = true;
  } else {
    emailInput.classList.add('field1');
    pemail.classList.add('lowercase');
    lowercaseEmail = false;
  }
};

emailInput.addEventListener('keyup', red);
emailInput.addEventListener('blur', red);

formulary.addEventListener('submit', (e) => {
  if (lowercaseEmail) {
    send.classList.add('send');
    Nosend.classList.remove('nosend');
    setTimeout(() => {
      send.classList.remove('send');
    }, 5000);
  } else {
    Nosend.classList.add('nosend');
    e.preventDefault();
  }
});
