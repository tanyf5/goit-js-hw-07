const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
    const noGapValue = nameInput.value.trim();
    nameOutput.textContent = noGapValue || "Anonymous";
})