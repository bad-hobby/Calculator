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
        if (this.currentOperand === '') return; // when curr op is empty, clear prev op field wont execute
        if (this.previousOperand !== '') {
            this.compute();
        } // if prev op isnt empty - compute with clicking any operation button instead of equals button 
        this.operation = operation; // sets the operation to the onae passed in
        this.previousOperand = this.currentOperand; // sends current op above
        this.currentOperand = ''; // clears current op value
    }

    compute() {
        let result;
        const prev = parseFloat(this.previousOperand); // converting prev string to number
        const current = parseFloat(this.currentOperand); // converting current string to number
        if (isNaN(previous) || isNaN(current)) return; // if we dont have any of these two values entered - cancels function with return
        switch (this.operation) {
            case '+' : 
              result = prev + current; 
              break;
            case '-' : 
              result = prev - current; 
              break;
            case '*' : 
              result = prev * current; 
              break;
            case '÷' : 
              result = prev / current; 
              break;
            default : 
              return; // Switch through operations and compute each case. If none of these 4 operations is entered - return 
        }
        this.currentOperand = result; // sets curr op field to the result
        this.operation = undefined; // clears operation
        this.previousOperand = ''; // empty prev op field
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand; 
        // Set the text in the current op to text of the clicked button
        this.previousOperandTextElement.innerText = this.previousOperand; 
        // set the text in the prev op field to the prev op text
    }
}
//-------------------------------------------------------------------------------------------------------------------
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
// Equals button functionality
equalsButton.addEventListener('click', button => {
    calculator.compute(); // when equals button is selected it calls the compute function
    calculator.updateDisplay();
})
