let value;
let num1 = 11
let num2 = 33

// number to string
value = String(255)
value = String(2 + 2)
value = String(true)
value = String([1,2,3,4])
value = (5 + 10).toString()
value = String(num1 + num2)

// string to number

value = Number('55')
value = parseInt('100.55')
value = parseFloat('100.55')


// Date
value = String(new Date())


console.log(value)
console.log(typeof(value))