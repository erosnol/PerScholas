/** Write your code below each comment */


/* Get the element with an ID of 'first' */
const first = document.getElementById ('first')
console.log(first);

/* Now delete that first element (in the html file), and re-run your code. What changed? */
// it deleted the first id
/* Get the elements with a class of 'second' with getElementsByClassName: */
const second = document.getElementsByClassName ('second')
console.log(second);
/* Delete one of the elements with a class of 'second' and refresh the page. Do you get a similar result? */
 second[1].remove()
/* Get the span element using getElementsByTagname: */
const span = document.getElementsByTagName ('span')
console.log(span);

/* Add a span anywhere, and re-run the last piece of code. What's different? */
// grab the element to append to 
const body = document.getElementsByClassName ('body')
console.log(body);
// create a new element 
const mySpan = document.createElement ('span')
// add text to the new element
mySpan.textContent = 'this is a new span'
// append the new element to the body
body[0].appendChild()