import moment from 'moment';
import { UI_COMPONENTS } from "./view.js";

const variants = ['years', 'days', 'hours'];
const nowDate = moment(new Date())
let indexForVariants = 0

UI_COMPONENTS.DATE_FORM.addEventListener('submit', event => {
  const inputValue = UI_COMPONENTS.DATE_INPUT.value
  const userDate = moment(new Date(UI_COMPONENTS.DATE_INPUT.value))

  if (inputValue) {
    UI_COMPONENTS.DATE_RESULT.innerHTML = ''

    getTime(userDate)
  } else {
    alert('Введите дату.')
  }

  event.preventDefault()
})

function getTime(userDate) {
  UI_COMPONENTS.DATE_RESULT.innerHTML += `<div>${variants[indexForVariants]}: <span>${userDate.diff(nowDate, variants[indexForVariants])}</span>.</div>`
  indexForVariants++
  if(indexForVariants < variants.length) {
    getTime(userDate)
  }
}