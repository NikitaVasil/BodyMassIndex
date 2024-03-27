import { BodyMassIndex } from './components/bmi';
import './css/styles.css';
import './index.html';

let bodyMassIndx = 0;
let idealWeight = 0;

//Принимаем данные из формы
const calculation = document.querySelector('.calculate-button');
const modalElement = document.getElementById('modal');
const bmi = document.querySelector('.bodymassindex');
const iweight = document.querySelector('.idealweight');
const blm = document.querySelector('.basiclevelmetabolism');
const bmr = document.querySelector('.basicmetabolicrate');
const met = document.querySelector('.metabolism');


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

  let bodyMassIndex = BodyMassIndex.create(Number(data.height), Number(data.weight),
                                            Number(data.age), data.gender, Number(data.activity));
  
  // console.log(bodyMassIndex.calculateBMI());
  // console.log(bodyMassIndex.idealWeight());
  // console.log(bodyMassIndex.basicMetabolicRate());
  // console.log(bodyMassIndex.metabolism());
  modalElement.classList.remove('visually-hidden');
  // modalElement.setAttribute('style', 'display: flex;')
  bmi.innerHTML = ` ${bodyMassIndex.calculateBMI()}`;
  iweight.innerHTML = ` ${bodyMassIndex.idealWeight()} `;
  blm.innerHTML = ` ${bodyMassIndex.basicLevelMetabolic()} `
  bmr.innerHTML = ` ${bodyMassIndex.basicMetabolicRate()} `;
  met.innerHTML = ` ${bodyMassIndex.metabolism()} `;
  modalElement.showModal();
}


modalElement.addEventListener("click", closeOnBackDropClick)

function closeOnBackDropClick({ currentTarget, target }) {
  const dialogElement = currentTarget
  const isClickedOnBackDrop = target === dialogElement
  if (isClickedOnBackDrop) {
    modalElement.close()
    // modalElement.setAttribute('style', 'display: none;')
    modalElement.classList.add('visually-hidden');
    // bmi.innerHTML = `Индекс массы тела: `;
    // iweight.innerHTML = `Идеальный вес: `;
    bmr.innerHTML = `Базовая скорость метаболизма: `;
    met.innerHTML = `Метаболизм:`;
  }
}
