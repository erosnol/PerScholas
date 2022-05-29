//* Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions.
//* For numbers divisible by 3, print "Fizz" instead of the number, and for numbers 
//* divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify 
//* your program to print "FizzBuzz", for numbers that are divisible by both 
//* 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

//Psuedo Code:
// Have an if statement checking numbers below 100 are divisible by 3 and 5, 
// then else if statement checking whether the number is divisible by 3, 
// then else if statement checking whether the number is divisible by 5, 
// then else statement
// If the number is divisble by 3 and 5, print "FizzBuzz"
// If the number is divisble by 3, print "Fizz"
// If the number is divisble by 5, print "Buzz"
// If the number is not divisble by 3 or 5, print the number

for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0)
        console.log(`${[i]} is FizzBuzz`)
    else if (i % 3 == 0) {
        console.log(`${[i]} is Fizz`)
    } else if (i % 5 == 0) {
        console.log(`${[i]} is Buzz`)
    } else {
        console.log(`${[i]}`)
    }
}