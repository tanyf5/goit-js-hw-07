const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
    const amount = Number(input.value);
    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = '';
    } else {
        alert('Please enter a number between 1 and 100.');
    }
});

destroyBtn.addEventListener('click', () => {
    destroyBoxes();
});

function createBoxes(amount) {
    const fragment = document.createDocumentFragment(); // Create a document fragment
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = 30 + i * 10 + 'px';
        box.style.height = 30 + i * 10 + 'px';
        box.style.backgroundColor = getRandomHexColor();
        fragment.appendChild(box); // Append each box to the fragment
    }
    boxesContainer.appendChild(fragment); // Append the fragment to the boxesContainer
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}