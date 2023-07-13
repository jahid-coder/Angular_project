//you have to check for even numbers in an array and put them in a separate array


let numner  = [1,2,3,4,5,6,6,7,87]

let evenNumber = numner.filter(function(n){
    return n%2==0
})

console.log(evenNumber)