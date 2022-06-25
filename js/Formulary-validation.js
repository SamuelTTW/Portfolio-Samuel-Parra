const formulary = document.querySelector('#data');
const emailInput = document.querySelector('#emailfield');
const pemail = document.querySelector('.pemail');
const expre = {
  regexemail: /^[a-z0-9_.+-]+@[a-z0-9-]+\.[a-z0-9-.]+$/,
};

const red = () => {
  if (expre.regexemail.test(emailInput.value)) {
    emailInput.classList.remove('field1');
    pemail.classList.remove('lowercase');
  } else {
    emailInput.classList.add('field1');
    pemail.classList.add('lowercase');
  }
};

emailInput.addEventListener('keyup', red);
emailInput.addEventListener('blur', red);

formulary.addEventListener('submit', (e) => {
  e.preventDefault();
});
