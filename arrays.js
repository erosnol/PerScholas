// const numbersArr = [11, 22] // empty array
// numbersArr.push(55) // added to the back
// numbersArr.unshift(33) // added to the front

// console.log(numbersArr);
// numbersArr.pop()
// console.log(numbersArr);
// numbersArr.shift()

// console.log(numbersArr);

// //* Arrays Excersise 1 /

// const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];

// // // ADD CODE HERE
// // fourthItem = horror[3];

// // // Write a console.log statement below to check your work!
// // console.log(fourthItem);


// //* Exercise 2  - 
// const  netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];

// // ADD CODE HERE
// netflixShows.push('The Office');
// netflixShows.unshift('Yeezus');

// // Write a console.log statement below to check your work!

// console.log(netflixShows);

// //* Arrays with Loops/
// const names = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah"]

// console.log(names.length);

// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }


//* Arrays with Loops and Callbacks/

// const names = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah"]

// console.log(names.length);

// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// const nums = [1, 56, 4565, 100, 55, 3, 4465]
// console.log(nums.sort( (a,b) => a-b   ));

// const sortName = ["Uaryn", "Buyan", "Mazaan", "Bayan"]
// console.log(sortName.sort().reverse());

//* Exercise 3 - 

// const synonyms = ['fantastic', 'wonderful', 'great'];
// const greetings = ['hello', 'hi', 'hey', 'hola', 'bonjour', 'greetings'];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
    // for (let i = 0; i < synonyms.length; i++) {
    //     greetings.push('Have a ${synonyms[i]} day!`);
    // }    console.log(greetings);  

// 2. 
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE
    // for (let i = 0; i < greetings.length; i++) {
    //     console.log(greetings[i], synonyms[i]);
    // }

    
//  //* Arrays exercise 4 
//     const increaseByTwo = [1, 2, 3, 4, 5];
// // ADD CODE HERE
// for(let i = 0; i < increaseByTwo.length; i++){
//     // increaseByTwo[i] = increaseByTwo[i] + 2
//     increaseByTwo[i] += 2
// }

// // Uncomment the line below to check your work!
// console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];

//* Exercise 5 - Iterate through the array and multiply a number by 10 if it is greater than or equal to 5.

const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];

// ADD CODE HERE

let increment = 0; 
for(let i = 0; i < timesTenIfOverFive.length; i++){
    if(timesTenIfOverFive[i] >= 5){
        timesTenIfOverFive[i] *= 10;
    }
}


// Uncomment the line below to check your work!
console.log(timesTenIfOverFive); // -> should print [230, 90, 110, 2, 100, 60]