 const button = document.querySelector('button')
 console.log('button')

 button.addEventListener('click', function(event) {
     console.log('event');
     //create li element
     const li = document.createElement('li')
     //query the text input
     const input = document.querySelector('input')
     //add input value to the li textContent
     li.textContent = input.value
     console.log(li)  
     //append the li to the ul
     const ul = document.querySelector('ul')
     ul.appendChild(li)
        //clear the input
    input.value = ''
    })

const ul = document.querySelector('ul')
ul.addEventListener('click', function(e) {
    console.log('e');
    console.log('clicked on');
}

)


//* ============== Form =============================>
// UL
const taskList = document. querySelector('#task-list')
// Input
const taskInput = document.getElementById('task-input')
//button
const submitButton = document.getElementById('submit-btn')

//add event listener to the submit Buttons
// submitButton.addEventListener('click', function(e) {
//     // stop the default behavior
//     e.preventDefault()
//     console.log(e);

// })

const form = document.querySelector('form')
console.log(form);
form.addEventListener('submit', function(e) 
{
    e.preventDefault()
    console.log(e);
})