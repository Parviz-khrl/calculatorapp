document.addEventListener('DOMContentLoaded', function () {
  const display = document.querySelector('.display');
  const buttons = document.querySelectorAll('.button');

  let currentInput = '';

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const buttonText = button.textContent;

          if (buttonText === 'AC') {
              currentInput = '';
          } else if (buttonText === '+/-') {
              currentInput = eval('-' + currentInput);
          } else if (buttonText === '=') {
              currentInput = eval(currentInput);
          } else {
              currentInput += buttonText;
          }

          display.textContent = currentInput;
      });
  });

  document.addEventListener('keydown', (event) => {
      const key = event.key;

      if (!isNaN(parseInt(key))) {
          currentInput += key;
      } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
          currentInput += key;
      } else if (key === 'Enter') {
          currentInput = eval(currentInput);
      } else if (key === 'Backspace') {
          currentInput = currentInput.slice(0, -1);
      } else if (key === 'Escape') {
          currentInput = '';
      }

      display.textContent = currentInput;
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const lineNumbersContainer = document.getElementById("line-numbers-container");
    const codeContent = document.getElementById("code-content");
    const lines = codeContent.innerText.split("\n");
    for (let i = 1; i <= lines.length; i++) {
        const lineNumberElement = document.createElement("pre");
        lineNumberElement.setAttribute("data-line", i);
        lineNumberElement.textContent = i;
        lineNumbersContainer.appendChild(lineNumberElement);
    }
  });