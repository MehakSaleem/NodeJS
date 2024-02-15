"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
function calculator() {
    inquirer_1.default
        .prompt([{
            type: 'input',
            name: 'num1',
            message: 'Enter the first number:',
            validate: (input) => !isNaN(parseFloat(input)) || 'Please enter a valid number'
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number:',
            validate: (input) => !isNaN(parseFloat(input)) || 'Please enter a valid number'
        },
        {
            type: 'list',
            name: 'operation',
            message: 'Select operation',
            choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
        },
    ])
        .then((answers) => {
        const num1 = parseFloat(answers.num1);
        const num2 = parseFloat(answers.num2);
        let result;
        switch (answers.operation) {
            case 'Addition':
                result = num1 + num2;
                break;
            case 'Subtraction':
                result = num1 - num2;
                break;
            case 'Multiply':
                result = num1 * num2;
                break;
            case 'Division':
                result = num1 / num2;
                break;
            default:
                result = NaN;
        }
        console.log(`Result: ${result}`);
    })
        .catch((error) => {
        console.error('An error occured:', error);
    });
}
calculator();
