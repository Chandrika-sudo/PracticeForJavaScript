// console.log("Hello" + " World")
//String Interpolation back ticks 
let name="Chandrika"// primitive sring
let id=1058
console.log(`Hello my name is ${name} and my Id is ${id}`)

let name1= new String("Chandrika") //Object wrapper around it

let a = "Chandrika";
let b = new String("Chandrika");

a == b;   // true  (value comparison)
a === b;  // false (type + value)

let x = new String("Chandrika");
let y = new String("Chandrika");

x === y; // false 😬
