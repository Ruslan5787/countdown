import moment from 'moment';
import { UI_COMPONENTS } from "./view.js";

const variants = ['years', 'days', 'hours'];
const nowDate = moment(new Date())

UI_COMPONENTS.DATE_FORM.addEventListener('submit', event => {
  const inputValue = UI_COMPONENTS.DATE_INPUT.value
  const userDate = moment(new Date(UI_COMPONENTS.DATE_INPUT.value))
  
  if (inputValue) {
    console.log(inputValue);
    for (const variant of variants) {
      UI_COMPONENTS.DATE_RESULT.innerHTML += `<div>${variant}: <span>${userDate.diff(nowDate, variant)}</span>.</div>`
    }
  } else {
    alert('Введите дату.')
  }
  
  event.preventDefault()
})
