const changeBtn = document.querySelector(".change-color");
const color = document.querySelector(".color");

const changeColor = () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  color.textContent = newColor;
};

changeBtn.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
