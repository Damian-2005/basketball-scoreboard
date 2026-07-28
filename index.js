// Logic: When the buttons are clicked: increment the number on the display based on the button.

let see = document.querySelector(".number");
console.log(see);

let see2 = document.querySelector(".number2");

let number1 = 0;
let number2 = 0;
function addTwo(){
    number1 = number1 + 2;
    console.log(number1);
    see.innerText = number1;
}

function addThree(){
    number1 = number1 + 3;
    console.log(number1);
    see.textContent = number1;
}

function addOne(){
    number1 = number1 + 1;
    console.log(number1);
    see.textContent = number1;
}

function addTwog(){
    number2 = number2 + 2;
    console.log(number2);
    see2.innerText = number2;
}

function addThreeg(){
    number2 = number2 + 3;
    console.log(number2);
    see2.textContent = number2;
}

function addOneg(){
    number2 = number2 + 1;
    console.log(number2);
    see2.textContent = number2;
}