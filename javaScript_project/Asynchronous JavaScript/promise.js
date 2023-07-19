let myPromise = new Promise(function(resolve,reject){
    const a = 5
    const b = 3

    setTimeout(()=>{
        if(a===b){
            resolve('The values are equel')
        }
        else{
            reject('the values are not equal')
        }
    },2000)
})

// pending stae
// console.log(myPromise)


// fulfilledcls

myPromise.then(function(result){
        console.log(result)
})


myPromise.catch(function(failedResult){
    console.log(failedResult)

})