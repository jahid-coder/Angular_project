let num = [1,2,3,4,20]
let sum = 0;


let result = num.reduce(function(acc,value){
        let updateedSum = acc+value
        return updateedSum
}, 0)

console.log(result);