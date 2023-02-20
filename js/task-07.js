const rangeEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')


rangeEl.addEventListener('input', onInputDrag)

function onInputDrag() {
    const rangeValue = rangeEl.value
    textEl.style.fontSize = `${rangeValue}px`
}