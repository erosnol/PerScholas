/*let message = `Fridays are my favorite day of the week`;

for (let i = 0; i <= 10; i++) 
    console.log(message.length);

    for (let i = 0; i <= 40; i++) {
        console.log(i);
    }
*/

//*For loop/

/*
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for (let i = 10; i >= 0; i--) {
    console.log(i);
}*/

//* While loop/

//while (condition) {

//}

/*let i = 0; // declaration

//condition
while (i <= 10) {
    console.log(`while ${i}`);
    i++; // increment
}*/

/*//condition
while(isLoggedIn){
    console.log(`while ${i}`);

    if (i === 3){
        i++
        continue
        console.log('inside 3');
    }

    if (i === 5) {
        // isLoggedIn = false;
        break;
    }
    i++; // increment
}


let i = 10;

do {
    console.log(i);
    i++
} while(i < 20);

*/

//* Exercise 1 - Write a loop that outputs: 1, 3, 5, 7, 9 2, 4, 6, 8, 10./

/*
for (let i = 1; i < 10; i+=2) {
    console.log(i);
}

for (let i = 2; i <=10; i+=2) {
    console.log(i);
}
*

//* Exercise 2 - Write a loop that counts down from 10 to 1./

/*
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
*/

//* Exercise 3 - Write a loop that outputs multiples of 3 starting at 6 and ends at 60./
/*
 for (let i = 6; i <= 60; i++ ) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
*/
//* Exercise 4 - Using the remainder % operator, write a loop that iterates between 0 and 10 and prints all even numbers. /

/*
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
*/

//* Exercise 5 - Write a loop that iterates from 1 - 20. Prints “prime” for all prime numbers, “even” for all even numbers, and “odd” for all odd numbers. /
/*
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else if (i % 2 !== 0) {
        console.log(`${i} is odd`);        
    }
     if (i === 2 || i === 3 || i === 5 || i === 7 || i === 11 || i === 13 || i === 17 || i === 19) {
        console.log(`${i} is prime`);
    }
}
*/

/* Exercise 6 - Write a loop for the given output:
#
##
###
####
#####
######
####### */


for (let i = 0; i < 7; i++) 
{
    console.log(`#${'#'.repeat(i)}`);
}
