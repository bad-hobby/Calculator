class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear() // clear the operants when calc is initiated
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {

    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return; // Checks for '.' and returns if it exist already
        this.currentOperand = this.currentOperand.toString() + number.toString(); // Appends the current operand with the selected number 
        // Add the number of whats in the button
         
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand; 
        // Set the text in the white to text of the clicked button
        this.previousOperandTextElement.innerText = this.previousOperand; 
    }
}
// Get HTML elements in variables
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
// Create New calculator 
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement); // define new calc from class
// Foreach all numbers
numberButtons.forEach(button => {
    button.addEventListener('click', () => { // get the one thats clicked
        calculator.appendNumber(button.innerText); // ., 0, 1, 2, 3 ...
        calculator.updateDisplay();
    })
});
//Foreach all operations
operationButtons.forEach(button => {
    button.addEventListener('click', () => { // get the one thats clicked
        calculator.chooseOperation(button.innerText); // *, -, + ...
        calculator.updateDisplay();
    })
});
