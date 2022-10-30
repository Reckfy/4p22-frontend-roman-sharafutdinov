'use strict';

let lastIndex = 0
let nextIndex = 1
const fibonacci = document.getElementById('button');
fibonacci.addEventListener('click', (event) => {
    
    let sum
    if ('button') {
        sum = lastIndex + nextIndex
        lastIndex = nextIndex
        nextIndex = sum
        console.log(sum)
    }
    
    document.getElementById('fibonacciNumber').innerText = sum;
});






