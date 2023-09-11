import { convertToBinari, convertToDecimal } from "./index.js"
import { textToNumber } from "./alfavit.js"
let div = document.getElementById('myResult')
let myText = document.getElementById('myText')
let form = document.getElementsByTagName('form')[0]
let btn = document.createElement('button')
btn.textContent = 'SUBMIT'
btn.addEventListener('click', (e) => {
    e.preventDefault()
    let textForCrypt = myText.value
    let numForCrypt = textToNumber(textForCrypt)
    let result = convertToDecimal(convertToBinari(numForCrypt))
    div.textContent = result

})
form.appendChild(btn)



