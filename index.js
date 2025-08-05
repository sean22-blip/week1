const myButton = document.getElementById("myButton");
const Label1 = document.getElementById("myLabel");
const Label2 = document.getElementById("myLabel2");
const Label3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;
let randomNumber1;
let randomNumber2;
let randomNumber3;

myButton.onclick = function(){  
    randomNumber1 = Math.floor(Math.random() * max) + min;
    randomNumber2 = Math.floor(Math.random() * max) + min;
    randomNumber3 = Math.floor(Math.random() * max) + min;
    Label1.textContent = randomNumber1;
    Label2.textContent = randomNumber2;
    Label3.textContent = randomNumber3;
}
