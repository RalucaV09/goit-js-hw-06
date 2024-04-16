const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');


changeColorButton.addEventListener('click', function() {
  
  const randomColor = getRandomHexColor();
  
  
  document.body.style.backgroundColor = randomColor;

  colorSpan.textContent = randomColor;
});