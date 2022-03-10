let numberToAdd = ''
let newNumber = ''
let operationToMake = 0 //1 - Division | 2 - Multiplication | 3 - Addition | 4 - Subtraction
let result = 0
let displayArea = document.querySelector('p#displayArea')


let numberZero = document.querySelector('input#zero').value
let numberOne = document.querySelector('input#one').value
let numberTwo = document.querySelector('input#two').value
let numberThree = document.querySelector('input#three').value
let numberFour = document.querySelector('input#four').value
let numberFive = document.querySelector('input#five').value
let numberSix = document.querySelector('input#six').value
let numberSeven = document.querySelector('input#seven').value
let numberEight = document.querySelector('input#eight').value
let numberNine = document.querySelector('input#nine').value

function insertNumber1() {
    composeNumber(numberOne)
}
function insertNumber2() {
    composeNumber(numberTwo)
}
function insertNumber3() {
    composeNumber(numberThree)
}
function insertNumber4() {
    composeNumber(numberFour)
}
function insertNumber5() {
    composeNumber(numberFive)
}
function insertNumber6() {
    composeNumber(numberSix)
}
function insertNumber7() {
    composeNumber(numberSeven)
}
function insertNumber8() {
    composeNumber(numberEight)
}
function insertNumber9() {
    composeNumber(numberNine)
}
function insertNumber0() {
    composeNumber(numberZero)
}
function insertDot() {
    composeNumber(".")
}


function composeNumber (number) {
    numberToAdd += number
    if (numberToAdd.length > 15) {
        displayArea.innerText = 'Erro'
        numberToAdd = ''
    } else {
        updateDisplay(numberToAdd)
    }
    return numberToAdd
}

function updateDisplay(number) {
    displayArea.innerText = number
}