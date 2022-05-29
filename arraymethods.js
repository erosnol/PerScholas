//* Arrays .foreach vs .map / 
// const numbers = [45,67,23,56,784,4,5]

// const output = []
// numbers.forEach( element => output.push(element * 2)  )

// console.log(output);

// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];

// fruit.forEach((element, index, fruit) => {
//     fruit[index] = element.toUpperCase()
// })

// const fruitUpperCase = []
// fruit.forEach(element => fruitUpperCase.push(element.toUpperCase()))

// console.log(fruit);
// console.log(fruitUpperCase);


// const output2 = numbers.map(element => element*2)
// console.log(output2);

//* JS Callbacks and Arrow Functions / 
//* forEach Array/
// ? Part 1/

// ADD CODE HERE

 //! colton 

 const forEach = (arr,call) => {
     for (let i=0; i < arr.length; i++){
         call(arr[i])
     }
 }
const num = [1 , 2, 3]
console.log(forEach(num, num => console.log(num+1)))

// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]