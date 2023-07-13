

const transaction = [ 1000, 3000, 4000, 2000, - 898, 3800, - 4500]


let firstWithdrawl = transaction.find((n)=>{
    return n<0;
})


console.log('First Withdrawl ->'+ firstWithdrawl);


// some method
