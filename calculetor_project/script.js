let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value); // Да, eval — это зло, но для обучения сойдёт
    } catch (error) {
        display.value = 'Ошибка';
    }
}