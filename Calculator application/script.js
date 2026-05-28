const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    alert("Invalid Expression");
  }
}

/* 🎹 Keyboard Input Handling */
document.addEventListener("keydown", function (event) {
  const key = event.key;

  // Allow numbers and operators
  if (
    (key >= '0' && key <= '9') ||
    key === '+' ||
    key === '-' ||
    key === '*' ||
    key === '/' ||
    key === '.'
  ) {
    appendValue(key);
  }

  // Enter key for calculation
  else if (key === "Enter") {
    calculate();
  }

  // Backspace key
  else if (key === "Backspace") {
    deleteLast();
  }

  // Escape key to clear
  else if (key === "Escape") {
    clearDisplay();
  }
});