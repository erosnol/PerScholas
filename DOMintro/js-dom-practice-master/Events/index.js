 // console.log(`running script`);

//* Function
function printMessage(){
    console.log(`Button Clicked!!!!`);
}

function alertMe(){
    let num = 5+5
    alert(`Button was clicked! ${num}`)
}

//* Using the id
// grabs the button from the HTML
const button = document.getElementById('click-me')
console.log(button);
button.onclick = alertMe

//* Adding multiple events listeners
const multipleBtn = document.querySelector('#multiple')
console.log(multipleBtn);
multipleBtn.addEventListener('click', printMessage)
multipleBtn.addEventListener('click', alertMe)

//* DIV
 const box = document.getElementById('box')
    console.log(box);

function myEventHandler() {
    console.log('working!!')

//Add event listener to the box
box.addEventListener('mouseenter', myEventHandler)}