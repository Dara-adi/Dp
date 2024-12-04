let display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = math.evaluate(display.value);
    } catch (error) {
        display.value = "Hi my name is dara and i want to tell you if you are using my laptop stop it after checking my projects";
    }
}
