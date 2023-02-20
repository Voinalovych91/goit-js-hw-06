function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const btnChangeColorEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

btnChangeColorEl.addEventListener('click', (event) => {

document.body.style.backgroundColor = getRandomHexColor();
return textEl.textContent = getRandomHexColor();
})

