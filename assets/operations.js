function eraseAll() {
    numberToAdd = ''
    newNumber = ''
    updateDisplay(numberToAdd)
}

function eraseLast() {
    numberToAdd = numberToAdd.slice(0, -1)
    updateDisplay(numberToAdd)
    return numberToAdd
}

function refreshNumberToAdd() {
    numberToAdd = ''
    return numberToAdd
}

function division() {
    if (newNumber == "") {
        newNumber = numberToAdd
    } else {
        newNumber = Number(newNumber) / Number(numberToAdd) 
        updateDisplay(checkResultLength(newNumber))
    }
    refreshNumberToAdd()
    operationToMake = 1
    return newNumber
}

function multiply() {
    if (newNumber == "") {
        newNumber = numberToAdd
    } else {
        newNumber = Number(newNumber) * Number(numberToAdd) 
        updateDisplay(checkResultLength(newNumber))
    }
    refreshNumberToAdd()
    operationToMake = 2
    return newNumber
}

function sum() {
    if (newNumber == "") {
        newNumber = numberToAdd
    } else {
        newNumber = Number(numberToAdd) + Number(newNumber)
        updateDisplay(checkResultLength(newNumber))
    }
    refreshNumberToAdd()
    operationToMake = 3
    return newNumber
}

function subtraction() {
    if (newNumber == "") {
        newNumber = numberToAdd
    } else {
        newNumber = Number(newNumber) - Number(numberToAdd) 
        updateDisplay(checkResultLength(newNumber))
    }
    refreshNumberToAdd()
    operationToMake = 4
    return newNumber
}


function showResult() {
    switch(operationToMake) {
        case 1:
            //DIVISION
            result = Number(newNumber) / Number(numberToAdd)
            updateDisplay(checkResultLength(result))
            numberToAdd = result.toString()
            break
        case 2:
            //MULTIPLICATION
            result = Number(newNumber) * Number(numberToAdd)
            updateDisplay(checkResultLength(result))
            numberToAdd = result.toString()
            break
        case 3:
            //ADDITION
            result = Number(newNumber) + Number(numberToAdd)
            updateDisplay(checkResultLength(result))
            numberToAdd = result.toString()
            break
        default:
            //SUBTRACTION
            result = Number(newNumber) - Number(numberToAdd)
            updateDisplay(checkResultLength(result))
            numberToAdd = result.toString()
            break
    }
}

function checkResultLength(result) {
    if (result.toString().length > 15) {
        result = result.toString().slice(0, -3)
        result = Number(result)
    }

    return result
}