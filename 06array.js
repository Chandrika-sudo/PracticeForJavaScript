// const arr=[1,2,3,4]
// console.log(arr[0])

const arr1=new Array(1,2,3,4);
//console.log(arr1)
// arr1.push(5)
// console.log(arr1)
// arr1.pop()
// console.log(arr1)

arr1.unshift(9)
console.log(arr1)

arr1.shift()
console.log(arr1)

console.log(arr1.includes(9)) //bool
console.log(arr1.indexOf(9)) // -1

const arr2= arr1.join()
console.log(arr2)
console.log(typeof arr2) // string

//slice splice
let A1=[1,2,3,4,5,6]
let A2=A1.slice(1,3);
console.log(A2); //[1,2]

let A3=A1.splice(1,3)
console.log("Original: ", A1);//[4,5,6]
console.log("Spliced A3: " A3);// [1,2,3]