import { Calculate } from './components/bmi';
import './css/styles.css';
import './index.html';


const calculation = document.querySelector('.calculate-button');
const modalElement = document.getElementById('modal');
const bmi = document.querySelector('.bodymassindex');
const iweight = document.querySelector('.idealweight');
const blm = document.querySelector('.basiclevelmetabolism');
const bmr = document.querySelector('.basicmetabolicrate');
const met = document.querySelector('.metabolism');

//Открываем диалоговое окно
calculation.addEventListener('click', getFormValue);
function getFormValue(event) {
  event.preventDefault();
  const data = {};
  for(let field of form) {
    const {name} = field;
    if(name) {
      const{value} = field;
      data[name] = value;
    }
  }

  const calculate = Calculate.create(Number(data.height), Number(data.weight),
                                            Number(data.age), data.gender, Number(data.activity));
  
  let bodymassindex = calculate.calculateBMI();
  let idweight = calculate.idealWeight();
  let basiclavelmet = calculate.basicLevelMetabolic();
  let basicmetrate = calculate.basicMetabolicRate();
  let metab = calculate.metabolism();

  modalElement.classList.remove('visually-hidden');

  
  if ((bodymassindex >= 18) && (bodymassindex <= 35)){
    bmi.innerHTML = ` ${bodymassindex}`;
    iweight.innerHTML = ` ${idweight} `;
    blm.innerHTML = ` ${basiclavelmet} `
    bmr.innerHTML = ` ${basicmetrate} `;
    met.innerHTML = ` ${metab} `;
    modalElement.showModal();
  }
  else {
    alert('Вы ввели неправильные значения');
  }
}

//Закрываем модальное окно
modalElement.addEventListener("click", closeOnBackDropClick)
function closeOnBackDropClick({ currentTarget, target }) {
  const dialogElement = currentTarget
  const isClickedOnBackDrop = target === dialogElement
  if (isClickedOnBackDrop) {
    modalElement.close()
    modalElement.classList.add('visually-hidden');
    bmi.innerHTML = ' ';
    iweight.innerHTML = ' ';
    blm.innerHTML = ' ';
    bmr.innerHTML = ' ';
    met.innerHTML = ' ';
  }
}


//Смена цветовой темы
const page = document.querySelector('.page');
const changeButton = document.querySelector('.change-button');

changeButton.onclick = function() {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
};

