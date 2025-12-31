const score =400
console.log(score)


//Explicitly calling Number 
const balance= new Number(100)
console.log(balance)
console.log(balance.toString())
console.log(balance.toFixed(3))//100.000

const val= 10000000000000
console.log(val.toLocaleString('en-In')) //1,00,00,00,00,00,000


//========================Math===================================
console.log(Math);
console.log(Math.abs(-4));//4
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.9));//4
console.log(Math.max(4,5,2,1,5,3,));//5

console.log(Math.random()); // 0 to 1
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max- min + 1)) + min);
