// //* Declaration ES5
// function greet(username){
//     console.log(`Hello, ${username}`);
// }

// //* Declaration / with default value
// function greet1(username = 'john'){
//     console.log(`Hello, ${username}`);
// }

// //* Function call
// // greet('abraham')

// //* function with multiple parameters
// function countDown(number = 10, user ){
//     greet(user)
//     for(let i= number; i >= 0; i--){
//         console.log(i);
//     }
// }

// // countDown(5, 'Abraham')

// // Function expression
// const square = function(value){
//     console.log(value * value)
// }

// // square(2)

// //* Arrow Function
// const add = (value1, value2) => {
//     return value1 + value2
// }

// let result = add(2,2)
// console.log(result);

// const verifyUserToken = (token, username, password) => {
//     if (!password){
//         console.log('you need a password');
//     }

//     if (token){
//         console.log(`welcome`);
//         return token
//     }
//     console.log('inside function');
//     if (!token){
//         console.log(`Access denied`);
//     }
// }
// console.log(verifyUserToken('token', '', '123456'));



//* Function Exercises / 

//* 1: Create a function addTwo that accepts a number and returns the number plus 2. 

// const addTwo = (number) => {
//     return number + 2
// }
// console.log(addTwo(7));

//  //* 2: Create a function addS that accepts a string and returns the string plus 's'.

//     const addS = (string) => {
//         return string + 's'
//     } 
//     console.log(addS('dog'));

// //* 3: Create a function sayHello that accepts a string argument and returns the string 'Hi,' with
// //* the passed-in string added to the end./

//     const sayHello = (string) => {
//         return `Hi, ${string}`
//     }
//     console.log(sayHello('Eros'));

// //* 4: Write a function wereAwesome that takes your and your classmates' names and returns
// //*     the string "[your classmate's name] and [you] are awesome!"/

//     let mateName = 'John';
//     let myName = 'Eros';

//     const wereAwesome = (string) => {
//         return `${mateName} and ${myName} are awesome!`
//     }
//     console.log(wereAwesome());

//* 5: Create a function isOdd thats accepts a number argument. isOdd will return true if the 
//* number is odd and false if the number is even. 

  const isOdd = (number) => {
        if (number % 2 === 0) {
            return false
        } else {
            return true
        }
    }
    console.log(isOdd(5));