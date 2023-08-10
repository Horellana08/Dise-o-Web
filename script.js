const textAreas = document.querySelectorAll(".text-area");
textAreas.forEach(textArea => {
    const charCount = textArea.nextElementSibling;

    textArea.addEventListener("input", () => {
        const textLength = textArea.value.length;
        charCount.textContent = `${textLength} caracteres`;
    });
});
