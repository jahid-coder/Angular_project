// let arr = [1,2,3,4,5]

// let squaredArr = []

// for(let i=0; i<arr.length; i++){
//         squaredArr.push(arr[i]*arr[i])
// }

// console.log(squaredArr);

const num = [1,2,3,4,5]

const squaredNum = num.map(function(n){
    return n*n;
})

console.log(squaredNum);


const transaction = [ 1000, 3000, 4000, 2000, - 898, 3800, - 4500]

const inrtoDollar = 80;

let transactionInDollars = transaction.map((amount)=>{
    return (amount/inrtoDollar).toFixed(0)
})

console.log(transactionInDollars);

let transactionInDollars1 = transaction.forEach((amount)=>{
    console.log((amount/inrtoDollar).toFixed(0))
})