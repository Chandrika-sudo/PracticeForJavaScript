// reference or non-primitive data types -- Actual value gets changed when changes
// Primitive data types form another instance and doesnot change original value

let age= 21
let age1= age

// age1=25
console.log("age1", age1)
console.log("age", age)  // stored in stack memoery does create duplicate value of age when age1 is equated to age

//Non primitive  heap memory -- Reference 

let One={
    name:"Chandrika",
    age:18,
    Id:1058
}

let two=One
console.log("two.age",two.age )
console.log("One.age",One.age )
two.age=19
console.log("two.age",two.age )
console.log("One.age",One.age )
