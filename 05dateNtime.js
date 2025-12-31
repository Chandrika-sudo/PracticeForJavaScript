//Dates 

let mydate= new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(typeof mydate)

let mydate1= new Date(2023,0,3)
console.log(mydate1);
console.log(mydate1.toString());

//mm-dd-yyyy
let mydate2= new Date("01-14-2023")
console.log(mydate2);
console.log(mydate2.toString());


// Time stamps

let tmstmp= Date.now()

console.log(tmstmp);
console.log(mydate2.getTime());
