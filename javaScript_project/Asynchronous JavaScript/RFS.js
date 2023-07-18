const fs = require('fs')

console.log('First Line')

// let data = fs.readFileSync('f1.txt')

// console.log('File 1 Data ->'+ data)

// let data2 = fs.readFileSync('f2.txt')

// console.log('File 1 Data ->'+ data2)


fs.readFile('f1.txt',RFS1)

function RFS1(err,data){
    if(err){
        console.log(err)
    }

    console.log('File 1 data ->'+ data)
    fs.readFile('f2.txt',RFS2)
   

}




function RFS2(err, data){
    if(err){
        console.log(err)
    }

    console.log('File 2 data ->'+ data)
    fs.readFile('f3.txt',RFS3)

}




function RFS3(err, data){
    if(err){
        console.log(err)
    }

    console.log('File 3 data ->'+ data)

}

console.log('Least line')