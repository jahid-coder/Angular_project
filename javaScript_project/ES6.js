// Arrow Function

let a = 2;
let test1 = ()=>{
    console.log(1);
}

let test2 = a=>{
    console.log(a+2);
}

let test3 = (a,b)=>{
    console.log(a+b);
}

test1();
test2(4);
test3(10,89);

// Tempalte literal and Multi-line Strings

let s =24;
console.log(`My age is ${ s}`);

// destructuring
let arr = ['Hi','I','am','Mrinal']

let [x, b, c, d] = arr


//Desructing an Object 
let myObj ={
    name: "adam",
    age : 25,
    gender :'M'
}

let {name,age,gender}= myObj;

console.log(name);
console.log(age);
console.log(gender);