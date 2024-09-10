let num1=8
let num2=2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent=num2

let sum1=document.getElementById("sum-el")
function add(){
   sum1.textContent= num1+num2
}


function subtract(){
    sum1.textContent= num1-num2
}

function divide(){
    sum1.textContent= num1/num2
}


function multiply(){
    sum1.textContent= num1*num2
}