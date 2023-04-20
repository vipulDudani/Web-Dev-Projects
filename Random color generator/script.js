const colorBox = document.querySelector('.color-box');
const newColorButton = document.querySelector('.new-color-button');

newColorButton.addEventListener('click', () => {
  const randomColor = getRandomColor();
  colorBox.style.backgroundColor = randomColor;
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color;
}
