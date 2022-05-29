
// Get the element with an ID of 'first' using querySelector
const h1First = document.querySelector('#first');
console.log(h1First)

// Get the elements with a class of 'second' with querySelector
const secondClass = document.querySelector('.second');
console.log(secondClass)
// Try the above prompt with querySelectorAll. What's the difference between what these two methods return?
const secondPromt = document.querySelectorAll('.second');
console.log(secondPromt)
// Get the span element using querySelector
const span = document.querySelector('span');
console.log(span)
// Get multiple span elements using querySelectorAll
const spanAll = document.querySelectorAll('span');
console.log(spanAll)
// Select only "a" tags *directly inside* of a div (no grandchildren).
const atags = document.querySelectorAll('div > a')
console.log(atags)

// Select all elements that contain a "data-target" attribute
const dataTarget = document.querySelectorAll('[data-target]');
console.log(dataTarget)
// Select all elements where the data-target attribute equals "#false"
const dataTargetFalse = document.querySelectorAll('[data-target="#false"]');
console.log(dataTargetFalse)