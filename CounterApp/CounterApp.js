// console.log("Running...")
//1. Create a new varible called 'total' and assign it the div with the id of 'total'
const total = document.getElementById('total')
console.log("total")

//2. Create Six Functions (add, subtract, multiplyBy2, divideby5, multiplyBy5, divideBy5)
// Example: 


function add() {
    total.textContent = Number(total.textContent) + 1
    alert("Added 1!!")
}


function subtract() {
    total.textContent = Number(total.textContent) - 1
    alert("subtracted 1!!")
}



function multiplyBy2() {
    total.textContent = Number(total.textContent) * 2;
    alert("multiplied by 2!!")
}



function divideBy2() {
    total.textContent = Number(total.textContent) / 2
    alert("divided by 2!!")
}



function multiplyBy5() {
    total.textContent = Number(total.textContent) * 5
    alert("multiplied by 5!!")
}



function divideBy5() {
    total.textContent = Number(total.textContent) / 5
    alert("divided by 5!!")
}




// function add(){
//update the value of the total varibale textContent
// use an alert to alert the user


//3. Attach Functions to Buttons
//get button, add event listener to button
const addButton = document.querySelector('#add')
console.log('addButton')
addButton.addEventListener('click', add)

const subButton = document.querySelector('#subtract')
console.log('subButton')
subButton.addEventListener('click', subtract)

const mult2Button = document.querySelector('#mult-2')
console.log('mult2Button')
mult2Button.addEventListener('click', multiplyBy2)

const div2Button = document.querySelector('#div-2')
console.log('div2Button')
div2Button.addEventListener('click', multiplyBy2)

const mult5Button = document.querySelector('#mult-5')
console.log('mult5Button')
mult5Button.addEventListener('click', multiplyBy2)

const div5Button = document.querySelector('#div-5')
console.log('div5Button')
div5Button.addEventListener('click', multiplyBy2)



