const a = 5;
const aSqured= a*a;
let  isEvent;

if(aSqured % 2 ==0){
    isEvent = true
}
else{
    isEven = false
}


console.log(isEvent);


const checkForSquare = (x) =>(x*x%2 ===0? true : false );


console.log(checkForSquare(9));