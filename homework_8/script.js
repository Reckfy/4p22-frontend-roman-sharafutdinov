'use strict';

const button = document.getElementById('button');

function calculate() {

let result;
const numberOne = document.getElementById('numberOne').value;
const numberTwo = document.getElementById('numberTwo').value;
const operator = document.getElementById('operator').value;

switch(operator) {
    case '': result = 'Не введён знак';
    break;
    case '+': result = Number(numberOne) + Number(numberTwo);
    break;
    case '-': result = Number(numberOne) - Number(numberTwo);
    break;
    case '*': result = Number(numberOne) * Number(numberTwo);
    break;
    case '/': result = Number(numberOne) / Number(numberTwo);
    break;
    default: result = 'Программа не поддерживает такую операцию';
    break;
};

if (numberOne === '') {
    result = 'Первое число не указано';
};

if (numberTwo === '') {
    result = 'Второе число не указано';
};

if (isNaN(numberOne) || isNaN(numberTwo)) {
    result = 'Некорректный ввод чисел';
};

if (result === Infinity) {
    result = 'Операция не корректна';  
};

console.log(result)
document.getElementById('result').innerHTML = result;
};