const leftControl = document.querySelector('#left-progress')
const rightControl = document.querySelector('#right-progress')
const resetButton = document.querySelector('#reset')

const updateTextValue = (value, input) => {
    let valueContainer = input.parentNode.querySelector('span')
    valueContainer.innerHTML = value
    input.value = value
}


const updateProgressBar = (value, input) => {
    let target = document.querySelector(input.dataset.target)
    target.style.width = value + '%'
    if (value > 50) target.classList.add('winning')
    else target.classList.remove('winning')
}


leftControl.addEventListener('input', () => {
    let value = leftControl.value
    let newRightValue = 100 - value
    updateTextValue(value, leftControl)
    updateProgressBar(value, leftControl)
    updateTextValue(newRightValue, rightControl)
    updateProgressBar(newRightValue, rightControl)
})


rightControl.addEventListener('input', () => {
    let value = rightControl.value
    let newLeftValue = 100 - value
    updateTextValue(value, rightControl)
    updateProgressBar(value, rightControl)
    updateTextValue(newLeftValue, leftControl)
    updateProgressBar(newLeftValue, leftControl)
})


resetButton.addEventListener('click', () => {
    let resetNumber = 50
    updateTextValue(resetNumber, leftControl)
    updateProgressBar(resetNumber, leftControl)
    updateTextValue(resetNumber, rightControl)
    updateProgressBar(resetNumber, rightControl)
})
