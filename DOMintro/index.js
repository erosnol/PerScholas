console.log(`Running Script...`);
console.log(document)

// const h1 = document.querySelector('h1')
// const h2 = document.querySelector ('h2')
// const p = document.querySelector('#p1')
// const p2 = document.querySelector('#p2')
// const lis = document.querySelectorAll('li')


// h1.style.fontFamily = "Monospace"
// h2.style.fontFamily = "Monospace"

// p1.style.backgroundColor = '#3498db'
// p1.style.padding = '10px'
// p1.style.fontSize = '18px'
// p1.style.fontFamily = 'Roboto'

// p2.style.backgroundColor = '#9b59b6'
// p2.style.padding = '10px'
// p2.style.fontSize = '18px'
// p2.style.fontFamily = 'Roboto'

// lis.forEach(li =>{
//     li.style.fontFamily = 'Monospace'
//     li.style.fontSize = '18px'
// }
    
//     )


// intro.style.color = 'orange'


// const li = document.querySelector('li:nth-child(3)')
// li.style.backgroundColor = 'green'
// console.log(li);


// // get all li
// const lis = document.querySelectorAll('li')
// // loop over the array like nodeList
// lis.forEach(li => {
//     li.style.fontSize = '38px'
//     li.style.backgroundColor = 'red'
//     li.style.color = 'white'
//     li.style.textAlign = 'center'
//     li.style.gap = '10'
// })


//gets all li in the page
// const lis = document.querySelectorAll('li')
// console.log(lis)
// console.log(lis[3])
// lis[3].textContent ='FOUR' //update the li with the index 3

// console.dir(h1);
// console.log(intro);
// console.log(bio);
// console.log(lis[3])

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./index.js" defer></script>
    <link rel="stylesheet" href="style.css">
    <title>DOM Manipulation Lab1</title>
</head>
<body>
    <h1>Introduction to the DOM</h1>

    <p id="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus error excepturi beatae! Nesciunt a labore exercitationem at eaque deserunt placeat. Adipisci placeat perspiciatis quasi tempore corporis ab laborum sit.</p>

    <p class="p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus error excepturi beatae! Nesciunt a labore exercitationem at eaque deserunt placeat. Adipisci placeat perspiciatis quasi tempore corporis ab laborum sit.</p>
    

    <h2>Lorem ipsum dolor sit amet.</h2>

    <ul>
        <li id="first">One</li>
        <li id="second">Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li>
    </ul>

    <div id="comments">
        <p>Lorem ipsum dolor sit amet.1</p>
        <p>Lorem ipsum dolor sit amet.2</p>
        <p>Lorem ipsum dolor sit amet.3</p>
        <p>Lorem ipsum dolor sit amet.4</p>
        <p>Lorem ipsum dolor sit amet.5</p>
    </div>
</body>
</html>
white_check_mark
eyes
raised_hands





11:58
// console.log(`running`);
// const h1 = document.querySelector('h1')
// const h2 = document.querySelector('h2')
// const p1 = document.querySelector('#p1')
// const p2 = document.querySelector('.p2')
// const lis = document.querySelectorAll('li')

// h1.style.fontFamily = 'Monospace'
// h2.style.fontFamily = 'Monospace'



// p1.style.backgroundColor = '#3498db'
// p1.style.padding = '10px';
// p1.style.fontSize = '18px';
// p1.style.fontFamily = 'Roboto'

// p2.style.backgroundColor = '#9b59b6'
// p2.style.padding = '10px';
// p2.style.fontSize = '18px';
// p2.style.fontFamily = 'Roboto'


// lis.forEach(li => {
//     li.style.fontFamily = 'Monospace';
//     li.style.fontSize = '18px';
    
// })

const ul = document.querySelector('ul')
const comments = document.querySelector('#comments')
const firstLi = document.querySelector('#first')
const secondLi = document.querySelector('#second')
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);
// console.log(ul.childElementCount);
// console.log(comments.children);
// console.log(firstLi.parentElement);
// console.log(firstLi.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);
// console.log(secondLi.parentElement);
// console.log(secondLi.previousElementSibling);

const body = document.querySelector('body')
// console.log(body.lastElementChild.previousElementSibling);
// console.log(body.script.div);


const firstPtaginComments = comments.firstElementChild;

firstPtaginComments.textContent = 'Hello'
firstPtaginComments.innerHTML = '<h4>HomePage</h4>'
console.log(firstPtaginComments);

// comments.classList = 'test'
comments.classList.add('test', 'card')
comments.classList.remove('card')
console.log(comments.classList.contains('test'))
comments.classList.toggle('card')
comments.classList.toggle('card')


// grabs the div with the container class
const container = document.querySelector('#container')

// creates an empty h1 element
const h1 = document.createElement('h1')

// adds text to the h1
h1.textContent = 'Dynamic'

// appends the h1 to the container div
container.appendChild(h1)

console.log(h1);